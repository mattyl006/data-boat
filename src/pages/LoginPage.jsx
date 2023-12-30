import React, { useState } from 'react';
import { useAuth } from '../AuthContext'; // Update with the correct path
import { useNavigate } from 'react-router-dom';
import {H1} from "../utils/fonts";
import theme from "../utils/theme";
import LandingSpaceStyle from "../components/LandingSpace/LandingSpaceStyle";
const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // Call the login function from your AuthContext
        try {
            await login({ username, password });
            navigate('/'); // Redirect to home page or intended page after login
        } catch (error) {
            // Handle errors (e.g., show an error message)
            console.error('Failed to log in', error);
        }
    };

    return (
        <LandingSpaceStyle>
            <H1 margin="0 0 20px 0" color={theme.colors.white}>
                Logowanie
            </H1>
            <form onSubmit={handleLogin}>
                <label className="LandingSpace__login" htmlFor="username">Użytkownik:</label>
                <input
                    className="login-form__input"
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <label className="LandingSpace__login" htmlFor="password">Hasło:</label>
                <input
                    className="login-form__input"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit">Zaloguj</button>
            </form>
        </LandingSpaceStyle>


    );
};

export default LoginPage;
