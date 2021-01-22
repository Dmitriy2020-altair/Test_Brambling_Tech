import { memo } from "react";
import UserItem from "./UserItem";
import UserItemPreview from "./UserItemPreview";

function UsersList({ users, view }) {

	return (
		<ul className={`user-list ${view === 'table' ? 'column' : 'row'}`}>
			{!users.length ? (
				<h4 className="user-list__title">No matches</h4>
			) : (
				users.map((user, index) => {
					return view === 'table' ? (
						<UserItem
							key={user.id}
							user={user}
							index={index}
						/>
					) : (
						<UserItemPreview
							key={user.id}
							user={user}
							index={index}
						/>
					)
				})
			)}
		</ul>
	)

}

export default memo(UsersList);