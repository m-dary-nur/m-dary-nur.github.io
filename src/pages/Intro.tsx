import React, { memo } from "react"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

import Icon from "../components/Icon"

interface IIntroProps {
   onClick?: () => any
}

interface IContactState {
   label: string
   link: string
   newTab: boolean
   icon: IconName
   prefix: IconPrefix
   color: string
}

const Intro = React.forwardRef(({ onClick }: IIntroProps, ref: React.Ref<HTMLDivElement>) => {
   const contacts: IContactState[] = [
      {
         label: "m.dary.nur@gmail.com",
         link: "mailto:m.dary.nur@gmail.com?subject=Hi, Dary",
         newTab: false,
         icon: "envelope",
         prefix: "far",
         color: "red-500",
      },
      {
         label: "+6288 221 222 091",
         link: "https://wa.me/6288221222091?text=hi+dary",
         newTab: true,
         icon: "whatsapp",
         prefix: "fab",
         color: "green-500",
      },
      {
         label: "M. Dary N.R.",
         link: "https://linkedin.com/in/m-dary-n-r-59050ab8",
         newTab: true,
         icon: "linkedin",
         prefix: "fab",
         color: "blue-700",
      },
      {
         label: "m-dary-nur",
         link: "https://github.com/m-dary-nur",
         newTab: true,
         icon: "github",
         prefix: "fab",
         color: "gray-800",
      },
   ]

   return (
      <div ref={ref} className="w-full md:w-5/6 mx-auto" style={{ height: "calc(100vh - 61px)", minHeight: 460 }}>
         <div className="flex flex-col-reverse md:flex-row p-20 pb-0 justify-between">
            <div className="flex flex-col justify-center items-center md:items-start md:pl-10">
               <h1 className="text-4xl text-center md:text-left">
                  Hi, I`m <span className="text-4xl font-bold text-gray-700">Dary</span>
               </h1>
               <h3 className="text-4xl text-center md:text-left font-bold text-multicolor">A Software Engineer</h3>
               <button
                  onClick={onClick}
                  className="mt-10 mb-6 px-6 py-3 bg-white text-profile-400 hover:bg-profile-400 hover:text-white border border-profile-400 rounded-lg text-lg font-bold transition-all duration-300"
                  style={{ width: "fit-content" }}
               >
                  About Me
               </button>
            </div>
            <div className="flex md:pr-10 justify-center items-center">
               <img
                  className="w-2/3 md:w-64 border-2 border-profile-400 rounded-full"
                  src="https://assets.gitlab-static.net/uploads/-/system/user/avatar/5519256/avatar.png?width=160"
                  alt="Muhammad Dary Nur Rabbani"
               />
            </div>
         </div>
         <div className="w-full flex flex-col md:flex-row md:flex-wrap md:justify-evenly items-center p-10">
            {contacts.map(({ label, link, newTab, icon, prefix, color }) => (
               <div key={label} className=" cursor-pointer px-2 py-1 flex items-center">
                  <Icon name={icon} prefix={prefix} size="2x" className={`text-${color} pr-1`} />{" "}
                  <a
                     href={link}
                     target={newTab ? "_blank" : ""}
                     rel="noopener noreferrer"
                     className="pr-2 cursor-pointer no-underline font-bold"
                  >
                     {label}
                  </a>
               </div>
            ))}
         </div>
      </div>
   )
})

export default memo(Intro)
