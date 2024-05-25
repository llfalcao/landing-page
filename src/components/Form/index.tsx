import { FormEvent, useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem("user", email);
    window.location.reload();
  };

  return (
    <div className="container">
      <form className="newsletter" onSubmit={handleSubmit}>
        <label htmlFor="email">Sign up for our latest deals!</label>
        <br />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="myemail@email.com"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <input type="submit" id="submit-email" value="Submit" />
      </form>
    </div>
  );
}
