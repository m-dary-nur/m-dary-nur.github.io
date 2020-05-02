import React, { memo } from "react"

interface IField {
   id?: string
   value: string | number
   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
   onEnter?: () => void
   type?: string
   className?: string
   disabled?: boolean
   autoFocus?: boolean
   placeholder?: string
}

const Field: React.FC<IField> = ({
   id,
   value,
   onChange,
   onEnter,
   type,
   className,
   disabled,
   autoFocus,
   placeholder,
}) => {
   const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>): void => {
      if (onEnter && e.keyCode === 13) {
         e.preventDefault()
         onEnter()
      }
   }

   return (
      <input
         type={type}
         id={id}
         value={value}
         onChange={onChange}
         onKeyDown={handleKeyDown}
         disabled={disabled}
         placeholder={placeholder}
         className={`w-full px-3 py-2 border placeholder-gray-400 focus:border-theme-400 rounded transition-all duration-300 ${className}`}
         autoFocus={autoFocus}
         autoComplete="off"
         autoCorrect="off"
         autoCapitalize="off"
         spellCheck="false"
      />
   )
}

export default memo(Field)
