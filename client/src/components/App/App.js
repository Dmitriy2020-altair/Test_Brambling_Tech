import { memo, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PENDING, useHttp } from '../../hooks/http.hook';
import ActionBar from '../ActionBar/ActionBar';
import Progress from '../Progress/Progress';
import SwitchLang from '../SwitchLang/SwitchLang';
import UsersList from '../UsersList/UsersList';
import './app.css';

function App() {
  const [requestUsers, statusOfUsers] = useHttp();

  const [users, setUsers] = useState([]);

  const params = useParams();

  const [filteredUsers, setFilteredUsers] = useState([]);

  const [listView, setListView] = useState('table');

  useEffect(() => {

    requestUsers({ url: '/api/users' })
      .then(users => {
        setUsers(users);
        setFilteredUsers(users);
      });
    
  }, [requestUsers]);

  return (
    <div className="container">
      <SwitchLang />
      <ActionBar
        params={params}
        filterUsers={setFilteredUsers}
        users={users}
        setListView={setListView}
        listView={listView}
      />
      {statusOfUsers === PENDING ? (
        <Progress />
      ) : (
          <UsersList
            users={filteredUsers}
            view={listView}
          />
      )}
    </div>
  );
}

export default memo(App);
