import { memo } from 'react';
import { useSelector } from 'react-redux';
import { EN, RU } from '../../redux/reducers/langReducer';
import './progress.css';

const langMap = {
	loading: {
		[EN]: 'loading',
		[RU]: 'Загрузка'
	}
}

function Progress() {
	const lang = useSelector(store => store.lang);

	return (
		<div className="progress">
			{langMap.loading[lang]}
			<div
				className="progress__elem"
				aria-label="loading"
			/>
		</div>
	)
}

export default memo(Progress);