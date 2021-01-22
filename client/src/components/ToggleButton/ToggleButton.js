import { memo } from 'react'
import '../Button/button.css';

function ToggleButton({ className, startIcon, endIcon, active, children, ...props }) {
	return (
		<button
			{...props}
			className={`btn ${className} ${active && 'mouse-down'}`}
		>
			{startIcon}
			{children}
			{endIcon}
		</button>
	)
}

export default memo(ToggleButton);