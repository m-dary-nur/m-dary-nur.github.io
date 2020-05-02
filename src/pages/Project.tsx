import React, { memo } from "react"
import { IconName, IconPrefix } from "@fortawesome/fontawesome-svg-core"

import Icon from "../components/Icon"

interface IProjectProps {
   ref: any
}

interface ILanguage {
   label: string
   icon?: IconName
   prefix?: IconPrefix
   color: string
}

interface IProject {
   name: string
   image: string
   front: ILanguage[]
   style: ILanguage[]
   back: ILanguage[]
   database: string
}

const Project: React.FC<IProjectProps> = React.forwardRef<HTMLDivElement, IProjectProps>((_, ref) => {
   const projects: IProject[] = [
      {
         name: "Cashier System",
         image: require("../images/cashier.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "JQuery",
               color: "yellow-700",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Bootstrap",
               icon: "bootstrap",
               prefix: "fab",
               color: "purple-600",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mysql",
      },
      {
         name: "Museum Ticketing System",
         image: require("../images/museum.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "JQuery",
               color: "yellow-700",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Bootstrap",
               icon: "bootstrap",
               prefix: "fab",
               color: "purple-600",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mysql",
      },
      {
         name: "Clinic Internal System",
         image: require("../images/clinic.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "Angular 1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
            },
            {
               label: "JQuery",
               color: "yellow-700",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Semantic UI",
               color: "teal-500",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mysql",
      },
      {
         name: "Inventory System",
         image: require("../images/inventory.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "Angular 1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
            },
            {
               label: "JQuery",
               color: "yellow-700",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Semantic UI",
               color: "teal-500",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mysql",
      },
      {
         name: "POS System",
         image: require("../images/pos.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "Angular 1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
            },
            {
               label: "JQuery",
               color: "yellow-700",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Material UI",
               color: "profile",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mysql",
      },
      {
         name: "ERP and accounting System",
         image: require("../images/erp.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "Angular 1",
               icon: "angular",
               prefix: "fab",
               color: "red-600",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Bootstrap",
               icon: "bootstrap",
               prefix: "fab",
               color: "purple-600",
            },
         ],
         back: [
            {
               label: "PHP",
               icon: "php",
               prefix: "fab",
               color: "blue-600",
            },
            {
               label: "Codeigniter",
               icon: "fire",
               prefix: "far",
               color: "orange-600",
            },
         ],
         database: "Mariadb",
      },
      {
         name: "Tax Consultant Report System",
         image: require("../images/consultant.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "React",
               icon: "react",
               prefix: "fab",
               color: "profile-400",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Tailwind",
               color: "teal-400",
            },
         ],
         back: [
            {
               label: "Node.js",
               icon: "node",
               prefix: "fab",
               color: "green-400",
            },
            {
               label: "Restana",
               color: "gray-600",
            },
         ],
         database: "Mariadb",
      },
      {
         name: "My Profile",
         image: require("../images/profile.png"),
         front: [
            {
               label: "Javascript",
               icon: "js-square",
               prefix: "fab",
               color: "yellow-500",
            },
            {
               label: "React",
               icon: "react",
               prefix: "fab",
               color: "profile-400",
            },
            {
               label: "Typescript",
               color: "profile",
            },
         ],
         style: [
            {
               label: "CSS",
               icon: "css3-alt",
               prefix: "fab",
               color: "profile-600",
            },
            {
               label: "Tailwind",
               color: "teal-400",
            },
         ],
         back: [
            {
               label: "Node.js",
               icon: "node",
               prefix: "fab",
               color: "green-400",
            },
            {
               label: "Restana",
               color: "gray-600",
            },
         ],
         database: "Mariadb",
      },
   ]

   return (
      <div ref={ref} className="bg-gray-100 flex flex-col justify-center items-center px-2 md:px-20 py-4">
         <div className="w-full flex flex-col justify-center items-center px-2 md:px-20">
            <div className="my-5">
               <h1 className="px-4 text-gray-700 text-2xl border-b-2 border-red-500">Project</h1>
            </div>
         </div>
         <div className="w-full md:w-5/6 mx-auto my-5 flex flex-col md:flex-row md:flex-wrap justify-evenly">
            {projects.map(({ name, image, front, style, back, database }: IProject) => (
               <div
                  key={name}
                  className="flex flex-col flex-1 justify-start items-center m-2 md:m-4 px-4 md:px-6 py-4 bg-white border border-gray-200 hover:shadow-lg rounded-lg transition-all duration-300"
               >
                  <img src={image} alt={name} className="w-full h-auto my-2 border-2 border:gray-300 rounded-lg" />
                  <div className="w-full">
                     <ul className="list-none">
                        <li className="py-2 flex flex-row">
                           <span className="w-5/12 text-base whitespace-no-wrap">Client language</span>
                           {front.map(item => (
                              <div key={item.label} className={`px-2 text-${item.color} text-base font-bold`}>
                                 {item.icon ? (
                                    <Icon name={item.icon} prefix={item.prefix} size="2x" alt={item.label} />
                                 ) : (
                                    <label title={item.label} className="text-base font-bold">
                                       {item.label}
                                    </label>
                                 )}
                              </div>
                           ))}
                        </li>
                        <li className="py-2 flex flex-row">
                           <span className="w-5/12 text-base whitespace-no-wrap">Styling</span>
                           {style.map(item => (
                              <div key={item.label} className={`px-2 text-${item.color} text-base font-bold`}>
                                 {item.icon ? (
                                    <Icon name={item.icon} prefix={item.prefix} size="2x" alt={item.label} />
                                 ) : (
                                    <label title={item.label} className="text-base font-bold">
                                       {item.label}
                                    </label>
                                 )}
                              </div>
                           ))}
                        </li>
                        <li className="py-2 flex flex-row">
                           <span className="w-5/12 text-base whitespace-no-wrap">Server language</span>
                           {back.map(item => (
                              <div key={item.label} className={`px-2 text-${item.color} text-base font-bold`}>
                                 {item.icon ? (
                                    <Icon name={item.icon} prefix={item.prefix} size="2x" alt={item.label} />
                                 ) : (
                                    <label title={item.label} className="text-base font-bold">
                                       {item.label}
                                    </label>
                                 )}
                              </div>
                           ))}
                        </li>
                        <li className="py-2 flex flex-row">
                           <span className="w-5/12 text-base whitespace-no-wrap">Database</span>
                           <label title={database} className="px-2 text-base font-bold">
                              {database}
                           </label>
                        </li>
                     </ul>
                  </div>
               </div>
            ))}
         </div>
      </div>
   )
})

export default memo(Project)
