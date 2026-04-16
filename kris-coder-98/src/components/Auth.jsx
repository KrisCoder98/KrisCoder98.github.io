import "../style/Form.css";
import { useState } from "react";

export default function Auth({ user, setUser }) {
    const [isLogin, setIsLogin] = useState(true);

    const switchLoginToggle = (value) => {
        (typeof value === "boolean")
            ? setIsLogin(value)
            : setIsLogin(!isLogin);
    };

    return (<>
        {user ? <LogOut setUser={setUser} /> : null}
        {isLogin ? <LogIn user={user} setUser={setUser} loginToggle={switchLoginToggle} /> : <SignIn user={user} setUser={setUser} loginToggle={switchLoginToggle}/>}
    </>);
}

export function LogIn({ user, setUser, loginToggle }) {
    function handleLogin() {
        user = { username: "", password: "" };
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUser(user);
    }

    return (
        <div id="form-container">
            <form>
                <button className="primary-style"onClick={handleLogin}>Login</button>

                <p>Hai già un account? <span className="like-btn" onClick={() => loginToggle(false)}>Accedi</span></p>
            </form>
        </div>
    );
}

export function LogOut({ setUser }) {
    function handleLogout() {
        localStorage.removeItem("currentUser");
        setUser(null);
    }

    localStorage.removeItem("currentUser");

    return <button className="destructive-style" onClick={handleLogout}>Logout</button>;
}

export function SignIn({ user, setUser, loginToggle }) {

    function handleSignIn() {
        user = { username: "", password: "" };
        localStorage.setItem("currentUser", JSON.stringify(user));
        setUser(user);
    }

    return (
        <div id="form-container">
            <form>

                <button className="primary-style" onClick={handleSignIn}>Sign In</button>

                <p>Non hai ancora un account? <span className="like-btn" onClick={() => loginToggle(true)}>Registrati</span></p>
            </form>
        </div>
    );
}