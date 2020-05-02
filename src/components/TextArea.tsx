import React, { memo } from "react"

interface ITextarea {
   id: string
   value: string | number
   onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
   className?: string
   disabled?: boolean
}

const TextArea: React.FC<ITextarea> = ({ id, value, onChange, className, disabled }) => (
   <textarea
      id={id}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full px-3 py-2 border focus:border-theme rounded transition-all duration-300 ${className}`}
      autoComplete="off"
      autoCorrect="off"
      autoCapitalize="off"
      spellCheck="false"
   />
)

export default memo(TextArea)
