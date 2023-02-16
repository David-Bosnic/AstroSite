import React, { useState } from "react"

export const Register = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fName, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Stop the page from reloading so I don't lose any states
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="fName">First Name</label>
                <input value={fName} onChange={(e) => setName(e.target.value)} type="text" placeholder="First Name" id="fName" name="fName"></input>

                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Register@email.com" id="email" name="email"></input>

                <label htmlFor="password">Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" id="password" name="password"></input>

                <button type="submit">Register</button>
            </form>

            {/* passes a prop that tells which page to go next */}
            <button className="link-button" onClick={() => props.onFormSwitch('login')}>Already have an account?</button>
        </div>
    )
}