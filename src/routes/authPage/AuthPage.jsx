import "./authPage.css";
import Image from "../../components/image/Image";
import { useState } from "react";
const AuthPage = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState("");
    return (
        <div className="authPage">
            <div className="authContainer">
                <Image path={"/general/logo.png"} alt={""} w={36} h={36} />
                <h1>{isRegister ? "Create an Account" : "Login to your account"}</h1>
                {isRegister ? (
                    <form key={'register'}>
                        <div className="formGroup">
                            <label htmlFor="username">Username</label>
                            <input type="text" placeholder="Username" required name="username" id="username" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="displayname">Name</label>
                            <input type="text" placeholder="Name" required name="displayname" id="displayname" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Email" required name="email" id="email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder="Password" required name="password" id="password" />
                        </div>
                        <button type="submit">Register</button>
                        <p onClick={() => setIsRegister(false)}>
                            Do you have an account? <b>Login</b>
                        </p>
                        {error && <span className="error">{error}</span>}
                    </form>
                ) : (
                    <form key={'login'}>
                        <div className="formGroup">
                            <label htmlFor="email">Email</label>
                            <input type="text" placeholder="Email" required name="email" id="email" />
                        </div>
                        <div className="formGroup">
                            <label htmlFor="password">Password</label>
                            <input type="text" placeholder="Password" required name="password" id="password" />
                        </div>
                        <button type="submit">Login</button>
                        <p onClick={() => setIsRegister(true)}>
                            Don&apos;t have an account? <b>Register</b>
                        </p>
                        {error && <span className="error">{error}</span>}
                    </form>
                )}
            </div>
        </div>
    )
}

export default AuthPage