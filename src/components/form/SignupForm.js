import React, { Component } from "react";

class SignupForm extends Component {
    userData;

    handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.elements.email.value;
        localStorage.setItem("user", email);
        window.location.reload();
    };

    render() {
        return (
            <div className="container">
                <form className="newsletter" onSubmit={this.handleSubmit}>
                    <label htmlFor="email">Sign up for our latest deals!</label>
                    <br />
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="myemail@email.com"
                    />

                    <input
                        type="submit"
                        id="submit-email"
                        name="submit"
                        value="Submit"
                    />
                </form>
            </div>
        );
    }
}

export default SignupForm;
