import React, { memo, useEffect, useRef } from "react"
import { Router } from "react-router"

import Nav from "./components/Nav"
import Routes from "./components/Routes"
import history from "./helpers/history"

const Root: React.FC = () => {
   const refs = [useRef(), useRef(), useRef(), useRef(), useRef()]
   const screenRef = useRef()

   useEffect(() => {
      document.title = "Muhammad Dary Nur Rabbani"
   })

   return (
      <Router history={history}>
         <div className="w-full h-screen bg-white text-base text-gray-600 font-sans">
            <Nav {...{ refs, screenRef }} />
            <div>
               <Routes {...{ refs, screenRef }} />
            </div>
         </div>
      </Router>
   )
}

export default memo(Root)
