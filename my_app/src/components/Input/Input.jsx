const Input = (props) => {
	const { value, type, placeholder, label, onChangeFunction, classNameFlag } = props;

	return (
		<div>
			<label>
				{label}</label>
			<input
				type={type || "text"}
				placeholder={placeholder}
				onChange={(event) => onChangeFunction(event.target.value)}
				value={value}
				className={classNameFlag ? value ? '' : 'red' : ''}
			/>

		</div>
	)
}

export default Input;
