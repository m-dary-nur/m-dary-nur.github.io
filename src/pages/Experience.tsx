import React, { memo } from "react"

interface IExpProps {
   ref: any
}

interface IExp {
   company: string
   sub: string
   color: string
   jobdesk: string[]
}

const Experience: React.FC<IExpProps> = React.forwardRef<HTMLDivElement, IExpProps>((_, ref) => {
   const exps: IExp[] = [
      {
         company: "CV. Expressa",
         color: "profile",
         sub: "Sep 2014 - Nov 2015 ( PHP Web Programmer )",
         jobdesk: ["Update Features.", "Identifying test cases for new features.", "Bugs & Error fixing."],
      },
      {
         company: "Freelance",
         color: "yellow-500",
         sub: "Nov 2015 - Nov 2016 ( PHP / JQuery Fullstack Developer )",
         jobdesk: ["Update Features.", "Bugs & Error fixing."],
      },
      {
         company: "PT. Tiga Inti Perkasa Tech",
         color: "red-500",
         sub: "Nov 2016 - Jan 2020 ( Senior Fullstack Engineer )",
         jobdesk: [
            "Team Lead.",
            "Design UI using mockup tool.",
            "Integrating the app with API.",
            "Create function & logic that handle client interaction.",
            "Help & guide other developers understand the code & design pattern.",
            "Creating backend API.",
            "Responsible for application performance.",
            "Fix Bugs & Errors.",
         ],
      },
      {
         company: "Freelance",
         color: "yellow-500",
         sub: "Jan 2020 - Current ( Fronend Engineer )",
         jobdesk: ["Slicing UI Design to App UI", "Update Features.", "Bugs & Error fixing."],
      },
   ]

   return (
      <div ref={ref} className="bg-white flex flex-col justify-center items-center px-2 md:px-20 py-4">
         <div className="w-full bg-white flex flex-col justify-center items-center px-2 md:px-20">
            <div className="my-5">
               <h1 className="px-4 text-gray-700 text-2xl border-b-2 border-green-500">Experience</h1>
            </div>
         </div>
         <div className="relative w-full md:w-2/3 m-8">
            <div className="border-r-2 border-green-500 absolute h-full top-0" style={{ left: 14 }} />
            <ul className="list-none m-0 p-0">
               {exps.map(({ company, color, sub, jobdesk }, i) => (
                  <li key={sub} className="mb-4">
                     <div className="flex items-center mb-1">
                        <div
                           className={`${
                              i + 1 === exps.length ? "bg-green-500" : "bg-white border-8 border-green-500"
                           } rounded-full h-8 w-8 z-10`}
                        />
                        <div className="flex flex-1 flex-col ml-4 font-medium justify-center items-start">
                           <span className={`text-${color} text-lg`}>{company}</span>
                           <span className="text-base">{sub}</span>
                        </div>
                     </div>
                     <div className="ml-12">
                        <ul className="list-disc list-inside">
                           {jobdesk.map(job => (
                              <li key={job} className="text-base">
                                 {job}
                              </li>
                           ))}
                        </ul>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
})

export default memo(Experience)
