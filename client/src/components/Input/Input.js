import { memo, useState } from "react";
import './input.css';

function Input({ ...props }) {
	const [isFocus, setIsFocus] = useState(false);

	return (
		<div className="input">
			<input
				onFocus={() => setIsFocus(true)}
				onBlur={() => setIsFocus(false)}
				{...props}
				className="input__elem"
			/>
			<div className={`input__effect ${isFocus && 'active'}`} />
		</div>
	)
}

export default memo(Input);