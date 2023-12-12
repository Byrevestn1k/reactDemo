const Input = (props) => {
	const { value, type, placeholder, label, onChangeFunction, classNameFlag, disabled, classOfInput } = props;

	return (
		<div>
			<label>
				{label}</label>
			<input
			disabled={disabled}
				type={type || "text"}
				placeholder={placeholder}
				onChange={(event) => onChangeFunction(event.target.value)}
				value={value}
				className={classNameFlag ? value ? '' : 'error' : classOfInput}
			/>

		</div>
	)
}

export default Input;
