import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/loginform/LoginForm';
import k from './app.module.scss';

function App() {
  return (
    <div className={k.app}>
      <Routes>
          <Route path="/" element={<LoginForm />}/>
          {/* <Route path="/users" Component={< />}/> */}
      </Routes>
    </div>
  );
}

export default App;
