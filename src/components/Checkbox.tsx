import React, { memo } from "react"

import Icon from "./Icon"

interface ICheckbox {
   id: string
   value: any
   label: string
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   disabled?: boolean
}

const Checkbox: React.FC<ICheckbox> = ({ id, value, label, onChange, disabled }) => (
   <label className="select-none cursor-pointer py-2" htmlFor={id}>
      <input
         type="checkbox"
         id={id}
         checked={value}
         onChange={onChange}
         disabled={disabled}
         style={{ display: "none" }}
      />
      <Icon name={value ? "check-square" : "square"} size="lg" className={value ? "text-theme" : "text-gray-500"} />
      {label}
   </label>
)

export default memo(Checkbox)
