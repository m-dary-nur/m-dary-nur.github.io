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
      initial: string
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
            { label: "Node.js", initial: "2015", icon: "node", prefix: "fab", color: "green-400", precentage: 4.7 },
            { label: "PHP", initial: "2014", icon: "php", prefix: "fab", color: "blue-600", precentage: 4.5 },
         ],
      },
      {
         title: "Client Side",
         content: [
            { label: "React", initial: "2016", icon: "react", prefix: "fab", color: "profile", precentage: 4.8 },
            {
               label: "Javascript (es5 / es6 / next)",
               initial: "2014",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
               precentage: 4.8,
            },
            {
               label: "JQuery",
               initial: "2014",
               color: "yellow-700",
               precentage: 4.6,
            },
            {
               label: "Angular 1",
               initial: "2015",
               extra: "1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
               precentage: 3.9,
            },
            {
               label: "Svelte",
               initial: "2019",
               color: "red-500",
               precentage: 3,
            },
            {
               label: "vue",
               initial: "2016",
               icon: "vuejs",
               prefix: "fab",
               color: "green-600",
               precentage: 2.8,
            },
            {
               label: "angular 2+",
               initial: "2015",
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
            { label: "CSS", initial: "2014", icon: "css3-alt", prefix: "fab", color: "profile-600", precentage: 4.8 },
            { label: "Sass", initial: "2017", icon: "sass", prefix: "fab", color: "pink-400", precentage: 4.7 },
            { label: "Less", initial: "2016", icon: "less", prefix: "fab", color: "blue-600", precentage: 4 },
         ],
      },
      {
         title: "Database",
         content: [
            { label: "Maria", initial: "2015", color: "profile", precentage: 4.1 },
            { label: "Mysql", initial: "2014", color: "profile-600", precentage: 4 },
            { label: "Postgres", initial: "2014", color: "blue-600", precentage: 3.8 },
            { label: "Mongo", initial: "2016", color: "green-500", precentage: 3.5 },
         ],
      },
      {
         title: "Other",
         content: [
            { label: "JSON", initial: "2014", color: "red-500", precentage: 5 },
            { label: "Git", initial: "2017", color: "gray-700", precentage: 4.7 },
            { label: "Analyze", initial: "2014", color: "yellow-500", precentage: 4.6 },
            { label: "Logic", initial: "2014", color: "purple-500", precentage: 4.2 },
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
            <label className="w-full text-red-400 pt-4 pb-2">
               * how to read my skill table below is how many the point and in then bracket is (initial year of learn)
               ex: &quot;3.2 (2015)&quot; is mean my point is 3.2 from 5 and i learn from 2015.
            </label>
            <label className="w-full text-red-400 py-2">
               * the points is purely a rate from me and reference to what i've got up to now.
            </label>
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
                     {content.map(({ label, extra, icon, prefix, color, precentage, initial }) => (
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
                           <div className="w-full flex flex-no-wrap text-yellow-500 justify-center items-center">
                              <div className="w-full bg-gray-200 border border-gray-400 rounded-lg shadow-inner">
                                 <div
                                    className={`py-0 bg-${color} rounded-lg`}
                                    style={{ width: `${precentage * 20}%` }}
                                 >
                                    <span className="text-sm text-white text-center ml-2 leading-loose whitespace-no-wrap">{`${precentage} (${initial})`}</span>
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
