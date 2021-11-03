import "./input.scss";

const handleFormSubmit = function(e) {
  e.prevetnDefault();
}

function Input({ className, children, ...props}) {
  return(
    <>
      <form onSubmit={handleFormSubmit} action="#">
        <label className="input__label" id="input">Kategoriya nomi</label>
        <input className={"input__search " + (className || '')} {...props} type="search" name="search" placeholder={children} />
      </form>
    </>
  )
}

export default Input;