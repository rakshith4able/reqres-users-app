import React from 'react';
import useInputState from '../../hooks/useInputState';
import { useDispatch } from 'react-redux';
import { loginUserAsync } from '../../redux/authSlice';
import './login.styles.css';

function Login() {

    const [email, setEmail] = useInputState('');
    const [password, setPassword] = useInputState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserAsync({ email: email, password: password }));
    }


    return (
        <div className="Login" onSubmit={handleSubmit}>
            <form>
                <label>E-mail</label>
                <input type="email" placeholder="Enter E-mail" value={email} onChange={setEmail} />
                <label>Password</label>
                <input type="password" placeholder="Enter Password" value={password} onChange={setPassword} />
                <input type="submit" value="LOGIN" />
            </form>
        </div>
    )
}

export default Login;


// 1.Add input state,handle inputs and handle submit
// onsubmit authenticate using reqres
// If authenticated redirect  to users page
// Add distinguish bw user and admin
// Make the project responsive