import React from "react"
import clsx from "clsx"

const Label = ({
  className = "",
  color = "secondary",
  children,
  style,
  ...rest
}) => {

  return (
    <span
      className={clsx(
       "",
        {
         
        },
        className
      )}
      {...rest}
    >
      {children}
    </span>
  )
}


export default Label
