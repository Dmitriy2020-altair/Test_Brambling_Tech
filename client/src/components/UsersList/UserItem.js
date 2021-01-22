import { memo, useCallback } from "react";
import { EN, RU } from "../../redux/reducers/langReducer";
import Button from "../Button/Button";
import { useDispatch, useSelector } from 'react-redux';
import './usersList.css';
import { addUser, isFavoriteUserSelector, removeUser } from "../../redux/reducers/favoriteUsersReducer";
import { starOutlinedIcon, starFilledIcon } from '../../svgIcons';

const langMap = {
	Years: {
		[EN]: 'years',
		[RU]: 'лет'
	}
}

function UserItem({ user, index }) {
	const { lang, isFavorite } = useSelector(store => ({
		lang: store.lang,
		isFavorite: isFavoriteUserSelector(store, user.id)
	}));

	const dispatch = useDispatch();

	const dispatchAddUserToFavoriteUsers = useCallback(() => {
		dispatch( addUser(user.id) );
	}, [user.id, dispatch]);

	const dispatchRemoveUserToFavoriteUsers = useCallback(() => {
		dispatch( removeUser(user.id) );
	}, [user.id, dispatch]);

	return (
		<li
			className="user-list__item user-item"
			style={{
				animationDelay: `${100 * index}ms`
			}}
		>
			<img
				className="user-item__avatar"
				src={`/images/avatars/${user.image}.svg`}
				alt="user avatar"
			/>
			<span className="user-item__name">{user.name}</span>
			<span className="user-item__age">{user.age} {langMap.Years[lang]}</span>
			<span className="user-item__phone">{user.phone}</span>
			<Button
				className="user-item__action-btn"
				onClick={isFavorite ? dispatchRemoveUserToFavoriteUsers : dispatchAddUserToFavoriteUsers}
			>
				{isFavorite ? starFilledIcon : starOutlinedIcon}
			</Button>
		</li>
	)

}

export default memo(UserItem);