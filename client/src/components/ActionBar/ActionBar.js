import { memo, useCallback, useEffect, useState } from "react";
import { EN, RU } from "../../redux/reducers/langReducer";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Input from "../Input/Input";
import ToggleButton from "../ToggleButton/ToggleButton";
import { useSelector } from 'react-redux';
import './actionBar.css';
import { validateUrlParams } from "../../functions";
import { upArrowIcon, downArrowIcon, listIcon, imgIcon } from '../../svgIcons';

const langMap = {
	SortBy: {
		[RU]: 'Сортировать',
		[EN]: 'Sort by'
	},
	Up: {
		[RU]: 'По возрастанию',
		[EN]: 'Up'
	},
	Down: {
		[RU]: 'По убыванию',
		[EN]: 'Down'
	},
	View: {
		[RU]: 'Вид',
		[EN]: 'View'
	},
	TapId: {
		[RU]: 'Введите ИД',
		[EN]: 'Tap ID'
	},
	TapName: {
		[RU]: 'Введите имя или фамилию',
		[EN]: 'Tap name or surname'
	},
	TapAge: {
		[RU]: 'Введите возраст',
		[EN]: 'Tap age'
	},
	Table: {
		[RU]: 'Таблица',
		[EN]: 'Table'
	},
	Preview: {
		[RU]: 'Предпросмотр',
		[EN]: 'Preview'
	}
}

function ActionBar({ filterUsers, users, params, setListView, listView }) {
	validateUrlParams(params);
	
	const [sortDirection, setSortDirection] = useState(params.direction ?? 'up');

	const handleSwitchListView = useCallback(e => {
		if (listView !== e.target.name) setListView(e.target.name);
	}, [listView, setListView]);

	const lang = useSelector(store => store.lang);

	const [values, setValues] = useState({
		id: params.id ?? '',
		name: params.name ?? '',
		age: params.age ?? ''
	});

	const handleInputChange = useCallback(e => {
		setValues(prevValues => ({
			...prevValues,
			[e.target.name]: e.target.value
		}));
	}, []);

	const handleSwitchSortDirection = useCallback(e => {
		if (sortDirection !== e.target.name) setSortDirection(e.target.name);
	}, [sortDirection]);

	useEffect(() => {
		filterUsers(prevUsers => {

			const copyOfPrevUsers = [...prevUsers];

			return copyOfPrevUsers.reverse();
		});
	}, [sortDirection, filterUsers]);

	useEffect(() => {
		const { id, name, age } = values;

		if (id) {
			const user = users.find(user => user.id === Number(id));

			if (!user) return filterUsers([]);

			filterUsers([user]);

			return;
		} else if (name) {
			const validateFullname = new RegExp(name, 'i');

			const filteredUsersByFullname = users.filter(user => validateFullname.test(user.name));

			filterUsers(filteredUsersByFullname);
		} else if (age) {
			const filteredUsersByAge = users.filter(user => user.age === Number(age));

			filterUsers(filteredUsersByAge);
		} else {
			filterUsers([...users])
		}
	}, [values, users, filterUsers]);

	return (
		<div className="action-bar">
			<div>
				<h4>{langMap.SortBy[lang]}</h4>
				<div className="action-bar__input-group">
					<Input
						placeholder={langMap.TapId[lang]}
						type="number"
						name="id"
						value={values.id}
						onChange={handleInputChange}
					/>
					<Input
						placeholder={langMap.TapName[lang]}
						name="name"
						value={values.name}
						onChange={handleInputChange}
					/>
					<Input
						placeholder={langMap.TapAge[lang]}
						type="number"
						name="age"
						value={values.age}
						onChange={handleInputChange}
					/>
				</div>
				<ButtonGroup>
					<ToggleButton
						onClick={handleSwitchSortDirection}
						name="up"
						active={sortDirection === 'up'}
						startIcon={upArrowIcon}
					>
						{langMap.Up[lang]}
					</ToggleButton>
					<ToggleButton
						onClick={handleSwitchSortDirection}
						name="down"
						active={sortDirection === 'down'}
						endIcon={downArrowIcon}
					>
						{langMap.Down[lang]}
					</ToggleButton>
				</ButtonGroup>
			</div>
			<div>
				<h4>{langMap.View[lang]}</h4>
				<ButtonGroup>
					<ToggleButton
						onClick={handleSwitchListView}
						name="table"
						active={listView === 'table'}
						startIcon={listIcon}
					>
						{langMap.Table[lang]}
					</ToggleButton>
					<ToggleButton
						onClick={handleSwitchListView}
						name="preview"
						active={listView === 'preview'}
						startIcon={imgIcon}
					>
						{langMap.Preview[lang]}
					</ToggleButton>
				</ButtonGroup>
			</div>
		</div>
	)
}

export default memo(ActionBar);