import { memo, useCallback } from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useDispatch, useSelector } from 'react-redux';
import { EN, RU, switchLang } from "../../redux/reducers/langReducer";
import './switchLang.css';

function SwitchLang() {
	const lang = useSelector(store => store.lang);

	const dispatch = useDispatch();

	const handleToggleLang = useCallback(e => {
		dispatch( switchLang(e.target.name) );
	}, [dispatch]);

	return (
		<div className="lang-switcher">
			<ButtonGroup>
				<ToggleButton
					name={RU}
					active={lang === RU}
					onClick={handleToggleLang}
				>
					RU
				</ToggleButton>
				<ToggleButton
					name={EN}
					active={lang === EN}
					onClick={handleToggleLang}
				>
					EN
				</ToggleButton>
			</ButtonGroup>
		</div>
	)
}

export default memo(SwitchLang);