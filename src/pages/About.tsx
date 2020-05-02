import React, { memo } from "react"
import { IconName } from "@fortawesome/fontawesome-svg-core"

import Icon from "../components/Icon"

interface IAboutProps {
   ref: any
}

interface ISpec {
   icon: IconName
   color: string
   label: string
   description: string
}

const About: React.FC<IAboutProps> = React.forwardRef((_, ref: React.Ref<HTMLDivElement>) => {
   const specs: ISpec[] = [
      {
         label: "Slicing Design",
         icon: "pencil-ruler",
         color: "yellow-500",
         description: "Slicing UI design to UI app using HTML, CSS, and Javascript is so much fun and i love it.",
      },
      {
         label: "Responsive UI",
         icon: "phone-laptop",
         color: "profile",
         description: "I love make app support for any device for better User Experience for user.",
      },
      {
         label: "Perfect & Clean Code",
         icon: "code",
         color: "green-500",
         description: "I write and make code clean, useful, readable, and reusable for other engineer.",
      },
      {
         label: "Bug Fix",
         icon: "bug",
         color: "red-500",
         description: "I love code without bugs and errors, i also fixing it to make an App on the best performance.",
      },
   ]

   return (
      <div ref={ref} className="bg-profile-100 flex flex-col justify-center items-center md:px-2 md:px-20">
         <div className="my-5">
            <h1 className="px-4 text-gray-700 py-2 text-2xl border-b-2 border-yellow-500">About Me</h1>
         </div>
         <div className="w-10/12 md:w-5/6 mx-auto my-5">
            <section className="text-lg text-gray-700 leading-8 text-center">
               My fullname is <b className="text-lg">Muhammad Dary Nur Rabbani</b>, people call me{" "}
               <b className="text-lg">dary</b>,
               <br />I am a <code className="px-2 py-1 text-lg rounded bg-profile-200">
                  software engineer
               </code> with{" "}
               <span className="px-2 py-1 text-lg rounded border border-profile-200 text-red-500"> over 7 years</span>{" "}
               experience working in the software development.
               <br />I really like learning new tech and everything about ``fast performance``, i also love clean and
               neat UI Design.
            </section>
         </div>
         <div className="my-5">
            <h1 className="px-4 text-gray-700 py-2 text-2xl border-b-2 border-yellow-500">Specialization</h1>
         </div>
         <div className="w-10/12 md:w-5/6 mx-auto my-5 flex flex-col md:flex-row justify-evenly">
            {specs.map(({ icon, label, color, description }) => (
               <div
                  key={label}
                  className={`flex flex-col flex-1 justify-center items-center m-4 px-6 py-4 bg-white border border-gray-200 hover:border-${color} hover:text-white hover:bg-${color} hover:shadow-lg rounded-lg transition-all duration-300`}
               >
                  <div className="mt-4 mb-2">
                     <Icon name={icon} size="4x" />
                  </div>
                  <label className="mb-2 text-lg font-bold">{label}</label>
                  <section className="text-center text-base">{description}</section>
               </div>
            ))}
         </div>
      </div>
   )
})

export default memo(About)
