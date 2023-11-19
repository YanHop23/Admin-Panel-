//App.js
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import k from './app.module.scss';
import UsersWindow from './components/userswindow/UsersWindow';
import AddUser from './components/adduser/AddUsers';


function App() {
  return (
    <div className={k.app}>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users" element={<UsersWindow />}/>
          <Route path="/users/add" element={<AddUser />}/>
      </Routes>
    </div>
  );
}

export default App;
