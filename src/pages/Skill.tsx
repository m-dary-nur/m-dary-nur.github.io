import React, { memo } from "react"
import Icon from "../components/Icon"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

interface ISkillProps {
   ref: any
}

interface ISkill {
   title: string
   content: {
      label: string
      extra?: string
      icon?: IconName
      prefix?: IconPrefix
      color: string
      precentage: number
   }[]
}

const Skill: React.FC<ISkillProps> = React.forwardRef<HTMLDivElement, ISkillProps>((_, ref) => {
   const skills: ISkill[] = [
      {
         title: "Server Side",
         content: [
            { label: "Node.js", icon: "node", prefix: "fab", color: "green-400", precentage: 4.8 },
            { label: "PHP", icon: "php", prefix: "fab", color: "blue-600", precentage: 4.1 },
         ],
      },
      {
         title: "Client Side",
         content: [
            { label: "React", icon: "react", prefix: "fab", color: "profile", precentage: 4.8 },
            {
               label: "Javascript (es5 / es6 / next)",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
               precentage: 4.8,
            },
            {
               label: "JQuery",
               color: "yellow-700",
               precentage: 4.6,
            },
            {
               label: "Angular 1",
               extra: "1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
               precentage: 3.9,
            },
            {
               label: "Svelte",
               color: "red-500",
               precentage: 3.7,
            },
            {
               label: "vue",
               icon: "vuejs",
               prefix: "fab",
               color: "green-600",
               precentage: 3.1,
            },
            {
               label: "angular 2+",
               extra: "2+",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
               precentage: 2,
            },
         ],
      },
      {
         title: "Styling",
         content: [
            { label: "CSS", icon: "css3-alt", prefix: "fab", color: "profile-600", precentage: 4.8 },
            { label: "Sass", icon: "sass", prefix: "fab", color: "pink-400", precentage: 4.7 },
            { label: "Less", icon: "less", prefix: "fab", color: "blue-600", precentage: 4 },
         ],
      },
      {
         title: "Database",
         content: [
            { label: "Maria", color: "profile", precentage: 4.1 },
            { label: "Mysql", color: "profile-600", precentage: 4 },
            { label: "Postgres", color: "blue-600", precentage: 3.8 },
            { label: "Mongo", color: "green-500", precentage: 3.5 },
         ],
      },
      {
         title: "Other",
         content: [
            { label: "JSON", color: "red-500", precentage: 5 },
            { label: "Git", color: "gray-700", precentage: 4.7 },
            { label: "Logic", color: "purple-500", precentage: 4.7 },
            { label: "Analyze", color: "yellow-500", precentage: 4.6 },
         ],
      },
   ]

   return (
      <div ref={ref} className="bg-white flex flex-col justify-center items-center px-2 md:px-20 py-4">
         <div className="w-full bg-white flex flex-col justify-center items-center px-2 md:px-20">
            <div className="my-5">
               <h1 className="px-4 text-gray-700 text-2xl border-b-2 border-purple-500">Skills</h1>
            </div>
            <h3 className="text-gray-600 text-base mb-6">
               Since playing as Software Engineer, I learn some tech to find up my best choice to implementing on
               project, here`s several skill and tech that I have.
            </h3>
            <div className="w-full flex flex-col md:flex-row">
               {skills.map(({ title, content }) => (
                  <div
                     key={title}
                     className="w-full md:w-2/10 flex-1 pb-2 px-2 m-2 md:my-0 border border-gray-300 rounded-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300"
                  >
                     <div className="my-2 mx-4">
                        <h3 className="px-4 text-gray-600 py-2 text-xl font-bold border-b-2 border-gray-300 text-center">
                           {title}
                        </h3>
                     </div>
                     {content.map(({ label, extra, icon, prefix, color, precentage }) => (
                        <div key={label} className="py-2 flex flex-row justify-center items-center">
                           <div className="text-gray-600 w-7/12 flex items-center">
                              {icon ? (
                                 <Icon name={icon} prefix={prefix} size="2x" className={`text-${color}`} alt={label} />
                              ) : (
                                 <label className="font-bold" title={label}>
                                    {label}
                                 </label>
                              )}
                              {extra && (
                                 <>
                                    {" "}
                                    <span className="mx-2 font-bold">{extra}</span>
                                 </>
                              )}
                           </div>
                           <div className="w-full flex flex-no-wrap text-yellow-500 justify-precentaget items-center">
                              <div className="w-full border border-gray-400 rounded-lg shadow-inner">
                                 <div
                                    className={`py-0 bg-${color} rounded-lg`}
                                    style={{ width: `${precentage * 20}%` }}
                                 >
                                    <span className="text-sm text-white text-center ml-2">{precentage}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     ))}
                  </div>
               ))}
            </div>
         </div>
      </div>
   )
})

export default memo(Skill)
