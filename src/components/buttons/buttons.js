import "./buttons.scss";

function Buttons({ className, ...props}) {
  return(
    <>
      <button className={"button " + (className || '')} {...props} ></button>
    </>
  )
}

export default Buttons;