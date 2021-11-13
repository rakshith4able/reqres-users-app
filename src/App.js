import './App.css';
import Login from './components/login/login.component';
import GetUsers from './components/get-users/get-users.component';
import RequireAuth from './RequireAuth';
import { Routes, Route,Navigate} from "react-router-dom";


function App() {
  return (
    <div className="App">
       <Routes>
          <Route exact path="/" element={<Navigate to="/login"/> }/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact
        path="/user"
        element={
          // Good! Do your composition here instead of wrapping <Route>.
          // This is really just inverting the wrapping, but it's a lot
          // more clear which components expect which props.
          <RequireAuth  redirectTo="/login">
             <GetUsers  /> 
          </RequireAuth>
        }
      />
     
     </Routes>
       
    </div>
  );
}

export default App;
