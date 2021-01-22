import { memo, useCallback, useRef } from "react";
import './button.css';

function Button({ className, children, startIcon, endIcon, ...props }) {
	const btnRef = useRef(null);

	const handleMouseUp = useCallback(() => {
		btnRef.current.classList.remove('mouse-down');
		btnRef.current.classList.add('mouse-up');

		window.removeEventListener('mouseup', handleMouseUp);
	}, []);

	const handleMouseDown = useCallback(() => {
		btnRef.current.classList.remove('mouse-up');
		btnRef.current.classList.add('mouse-down');

		window.addEventListener('mouseup', handleMouseUp);
	}, [handleMouseUp]);

	return (
		<button
			{...props}
			onMouseUp={handleMouseUp}
			onMouseDown={handleMouseDown}
			ref={btnRef}
			className={`btn ${className}`}
		>
			{startIcon}
			{children}
			{endIcon}
		</button>
	)
}

export default memo(Button);