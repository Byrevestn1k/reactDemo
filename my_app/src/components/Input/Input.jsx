

const Input = ({ type, placeholder, onChange, labelInfo, value }) => {
   return (
      <div>
         <label htmlFor="">{labelInfo || "text"}
            <input type={type} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} />
         </label>
      </div>
   )
}

export default Input;