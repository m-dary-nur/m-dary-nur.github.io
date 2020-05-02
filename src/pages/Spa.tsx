import React, { memo } from "react"

import Intro from "./Intro"
import About from "./About"
import Skill from "./Skill"
import Experience from "./Experience"
import Project from "./Project"
import Icon from "../components/Icon"

export interface ISpaProps {
   aboutRef: React.Ref<HTMLDivElement>
   refs: React.Ref<HTMLDivElement>[]
   view: string
   setView: any
}

const Spa: React.FC<ISpaProps> = ({ refs }) => (
   <div>
      <Intro
         ref={refs[0]}
         onClick={() => {
            const aboutRef: any = refs[1]
            const about: { scrollIntoView: any } = aboutRef.current
            about.scrollIntoView({ behavior: "smooth" })
         }}
      />
      <About ref={refs[1]} />
      <Skill ref={refs[2]} />
      <Experience ref={refs[3]} />
      <Project ref={refs[4]} />
      <div className="py-6 w-full flex justify-center items-center">
         <h2 className="text-base text-lg font-bold">
            Muhammad Dary Nur Rabbani <Icon name="copyright" /> 2020
         </h2>
      </div>
   </div>
)

export default memo(Spa)
