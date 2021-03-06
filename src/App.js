import './App.css';
import Login from './components/login/login.component';
import Dashboard from './components/dashboard/dashboard.component'
import RequireAuth from './RequireAuth';
import NotFound from "./components/not-found/not-found.component";
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
          <RequireAuth  redirectTo="/login">
             <Dashboard  /> 
          </RequireAuth>
        }/>
          <Route path="*" element={<NotFound/>}/>
     
     </Routes>
       
    </div>
  );
}

export default App;
