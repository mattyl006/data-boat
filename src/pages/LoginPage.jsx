import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {H1} from "../utils/fonts";
import theme from "../utils/theme";
import LandingSpaceStyle from "../components/LandingSpace/LandingSpaceStyle";
import getSalt from '../api/getSalt';
import authorize from '../api/authorize';
import { useDispatch } from 'react-redux';
import CryptoJS from 'crypto-js';
import { setToken } from '../redux/authorizeSlice';

function createHashString(inputString, salt, ITERATIONS = 10000, keySize = 256) {
    // Generate input + reverse input
    let inputReversed = inputString.split('').reverse().join('');
 
    // Generate the hash
    let hash = CryptoJS.PBKDF2(inputString + inputReversed, salt, {
        keySize: keySize / 32,
        iterations: ITERATIONS,
        hasher: CryptoJS.algo.SHA1
    });
 
    return CryptoJS.enc.Base64.stringify(hash);
}

function generateHash(username, password, salt) {
    // Concatenate the username, password, and salt
    let first = createHashString(username, salt);
    let second = createHashString(password, salt);
    let final = createHashString(first + second, salt);
 
    // Create a SHA-256 hash of the combined string
    let hashObject = CryptoJS.SHA256(final);
 
    // Get the hexadecimal representation of the hash
    let hash = hashObject.toString(CryptoJS.enc.Hex);
 
    return hash;
}

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [salt, setSalt] = useState('');
    const dispatch = useDispatch();

    // jak go nie ma to pusty string

    // const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        await getSalt(username, setSalt);
    };

    
    React.useEffect(() => {
        if (salt) {
            const hash = generateHash(username, password, salt);
            const doAuthorize = async (hash) => {
                await authorize(username, hash, (token) => dispatch(setToken(token)));
            }
            doAuthorize(hash).catch(console.error);
            dispatch(setToken(hash));
            navigate('/');
        }
    }, [dispatch, navigate, password, salt, username]);

    
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
