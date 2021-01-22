import { memo } from 'react'
import './buttonGroup.css';

function ButtonGroup({ children }) {
	return (
		<div className="btn-group">
			{children}
		</div>
	)
}

export default memo(ButtonGroup);