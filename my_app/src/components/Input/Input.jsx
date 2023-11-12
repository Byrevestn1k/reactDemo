

const Input = (props) => {
   const { type, placeholder, value, valueCheck } = props

   return (
      <input type={type} placeholder={placeholder} value={value} />
   )
}

export default Input;