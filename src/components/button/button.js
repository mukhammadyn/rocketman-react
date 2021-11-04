import "./button.scss";

function Button({ className, children, ...props }) {
  return (
    <>
        <button className={"btn " + (className || '')} {...props}>{children}</button>
    </>
  )
}

export default Button;