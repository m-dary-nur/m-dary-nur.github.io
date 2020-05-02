import React, { memo, useEffect, useReducer, useRef } from "react"
import { createPortal } from "react-dom"
import Icon from "./Icon"

export const toastManager = {
   subscribe(callback) {
      this.callback = callback
   },
   defaultOptions() {
      return {
         delay: 0,
         timeout: 3000,
         position: "top-center",
         color: "gray-600",
         bgColor: "white",
         icon: "info-circle",
         iconColor: "yellow-500",
      }
   },
   add(content, options) {
      const mergedOptions = { ...this.defaultOptions(), ...options }
      const timeoutId = setTimeout(() => {
         this.callback("ADD", content, { ...mergedOptions, id: timeoutId })
      }, mergedOptions.delay)
      return timeoutId
   },
   remove(id) {
      this.callback("REMOVE", null, { id })
      return true
   },
}

const toast = {
   show: (content, options = {}) => toastManager.add(content, options),
   remove: id => toastManager.remove(id),
}

const reducer = (state, action) => {
   const { type, data } = action
   if (type === "ADD") {
      if (state.filter(i => i.uniqueCode && i.uniqueCode === data.uniqueCode).length) {
         return state
      }
      return [...state, data]
   }
   if (type === "REMOVE") {
      return state.filter(i => i.id !== data.id)
   }
   return state
}

export const ToastContainer = memo(() => {
   const toastRootElementId = "toast-container"
   const [data, dispatch] = useReducer(reducer, [])
   const toastRef = useRef(null)

   const callback = (actionType, content, options) => {
      if (actionType === "ADD") {
         dispatch({ type: "ADD", data: { content, ...options, key: `${options.id}` } })
      }
      if (options.pause && actionType === "REMOVE") {
         dispatch({ type: "REMOVE", data: { id: options.id } })
      } else if (!options.pause) {
         window.setTimeout(() => {
            dispatch({ type: "REMOVE", data: { id: options.id } })
         }, options.timeout)
      }
   }

   useEffect(() => {
      toastManager.subscribe(callback)
   }, [])

   useEffect(() => {
      const node = document.createElement("div")
      node.setAttribute("id", toastRootElementId)
      document.body.appendChild(node)
      toastRef.current = node
      return () => document.body.removeChild(node)
   }, [])

   const positionMaintainer = () => {
      const mapper = {}
      data.map(({ position, ...rest }) => {
         if (position) {
            if (!mapper[position]) mapper[position] = []
            mapper[position].push(rest)
         }
         return true
      })
      return mapper
   }

   const markup = () => {
      const mapper = positionMaintainer()
      return Object.keys(mapper).map((position, index) => {
         const container = mapper[position].map(({ key, content, color, bgColor, iconColor, icon }) => (
            <div
               key={key}
               className={`toast items-center text-${color} bg-${bgColor} border border-gray-200 flex text-sm px-4 py-3 rounded shadow-lg`}
               role="alert"
            >
               <Icon name={icon} size="lg" className={`text-${iconColor}`} /> &nbsp; &nbsp;
               <p>{content}</p>
            </div>
         ))
         return (
            <div key={container.key} className={`toast-content ${position}`}>
               {container}
            </div>
         )
      })
   }

   if (!toastRef.current) return null
   return createPortal(markup(), toastRef.current)
})

export default toast
