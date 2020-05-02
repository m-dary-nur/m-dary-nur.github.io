import React, { useState, useEffect, memo } from "react"
import { Link } from "react-router-dom"

import Icon from "./Icon"
import { IconName } from "@fortawesome/fontawesome-svg-core"

type ButtonClickEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>

interface INavProps {
   refs: any
   screenRef: any
}

interface INavButtonProps {
   ref?: React.Ref<HTMLDivElement>
   icon: IconName
   label: string
   color: string
   isSection: boolean
   onClick: (e: ButtonClickEvent) => void
}

interface INav {
   label: string
   icon: IconName
   color: string
}

const NavButton: React.FC<INavButtonProps> = memo(
   React.forwardRef(({ isSection, icon, label, color, onClick }, ref: any) => (
      <button
         ref={ref}
         onClick={onClick}
         className={`w-full md:w-auto p-4 md:mx-2 md:py-1 cursor-pointer text-sm text-right md:text-center font-bold uppercase border-b-2 
      ${isSection ? `text-${color} border-${color}` : "border-transparent"}
      hover:border-${color} hover:text-${color} transition-all duration-200`}
      >
         <Icon name={icon} size="lg" /> {label}
      </button>
   ))
)

const Nav: React.FC<INavProps> = ({ refs, screenRef }) => {
   const navs: INav[] = [
      { label: "intro", icon: "hand-heart", color: "profile-400" },
      { label: "about", icon: "id-badge", color: "yellow-500" },
      { label: "skill", icon: "brackets-curly", color: "purple-500" },
      { label: "experience", icon: "user-chart", color: "green-500" },
      { label: "project", icon: "tasks", color: "red-500" },
   ]

   const [showNav, setNav] = useState<boolean>(false)

   // ===============================================================================
   const [active, setActive] = useState(0)

   const handle = () => {
      let currentSectionId = active
      for (let i = 0; i < refs.length; i++) {
         const iRef: React.MutableRefObject<any> = refs[i]
         if (iRef) {
            const section = iRef.current
            if (!section || !(section instanceof Element)) continue
            if (section.getBoundingClientRect().top - 61 < 0) {
               currentSectionId = i
               continue
            }
         }
         break
      }
      setActive(currentSectionId)
   }

   useEffect(() => {
      const myRef = screenRef
      const screen: { addEventListener: any; removeEventListener: any } = myRef.current
      screen.addEventListener("scroll", handle)
      return () => {
         screen.removeEventListener("scroll", handle)
      }
   })

   // ===============================================================================

   return (
      <div className="w-full flex h-16 px-4 md:mx-auto justify-between items-center border-b border-gray-200">
         <h3 className="whitespace-no-wrap font-bold text-sm md:text-base">
            <code className="text-yellow-500 font-bold">{"{"}</code> made with{" "}
            <Icon name="heart" className="text-red-500" alt="love" /> and{" "}
            <Icon name="react" prefix="fab" className="text-profile-400" alt="react" /> +{" "}
            <span className="pl-2 pr-1 font-bold text-white bg-profile cursor-default rounded" title="typescript">
               ts
            </span>{" "}
            +{" "}
            <span className="text-sm md:text-base" title="tailwindcss">
               tailwindcss
            </span>{" "}
            <code className="text-yellow-500 font-bold">{"}"}</code>
         </h3>
         <button
            onClick={() => setNav(old => !old)}
            onBlur={() => setTimeout(() => setNav(false), 200)}
            className="block md:hidden"
         >
            <Icon name="bars" size="lg" />
         </button>
         <div
            className={`${
               !showNav && "hidden"
            } absolute bg-white w-full top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50 border-b border-gray-300`}
         >
            <div className="flex flex-col justify-end items-end z-50">
               {navs.map((nav, i) => (
                  <NavButton
                     ref={refs[i]}
                     key={nav.label}
                     isSection={active === i}
                     onClick={() => refs[i].current.scrollIntoView({ behavior: "smooth" })}
                     {...nav}
                  />
               ))}
               <Link
                  to="/files/M_DARY_NUR_RABBANI.pdf"
                  target="_blank"
                  download
                  className="w-full no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
               >
                  <Icon name="file-download" size="lg" /> My VC
               </Link>
            </div>
         </div>
         <div className="hidden md:flex w-full top-0 left-0 mt-16 md:mt-0 md:left-auto md:relative z-50">
            <div className="w-full flex flex-row justify-end items-center z-50">
               {navs.map((nav, i) => (
                  <NavButton
                     ref={refs[i]}
                     key={nav.label}
                     isSection={active === i}
                     onClick={() => refs[i].current.scrollIntoView({ behavior: "smooth" })}
                     {...nav}
                  />
               ))}
               <Link
                  to="/files/M_DARY_NUR_RABBANI.pdf"
                  target="_blank"
                  download
                  className="no-underline p-4 cursor-pointer text-sm text-right font-bold text-multicolor"
               >
                  <Icon name="file-download" size="lg" /> My VC
               </Link>
            </div>
         </div>
      </div>
   )
}

export default memo(Nav)
