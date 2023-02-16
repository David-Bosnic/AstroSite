import React, { useState } from "react"

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop the page from reloading so I don't lose any states
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Login@email.com" id="email" name="email"></input>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input>
                {/* Allow user to submit using Login button or enter */}
                <button type="submit">Log In</button>
            </form>
            <button className="link-button" onClick={() => props.onFormSwitch('register')}>Create Account</button>
        </div>
    )
}