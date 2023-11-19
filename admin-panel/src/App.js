import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import k from './app.module.scss';
import Users from './components/users/Users';

function App() {
  return (
    <div className={k.app}>
      <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/users" element={<Users/>}/>
      </Routes>
    </div>
  );
}

export default App;
