//App.js
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import k from './app.module.scss';
import UsersWindow from './components/userswindow/UsersWindow';
import AddUser from './components/adduser/AddUsers';
import UserForm from './components/userform/UserForm';


function App() {
  return (
    <div className={k.app}>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users" element={<UsersWindow />}/>
          <Route path="/users/add" element={<AddUser />}/>
          <Route path="/users/:id" element={<UserForm />}/>
      </Routes>
    </div>
  );
}

export default App;
