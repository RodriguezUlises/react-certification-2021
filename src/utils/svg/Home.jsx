import * as React from "react"

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 12" {...props}>
      <title>{"Home"}</title>
      <path d="M8 0l8 6h-3v6H9V9H7v3H3V6H0z" />
    </svg>
  )
}

export default SvgComponent
