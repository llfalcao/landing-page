import { FormEvent, useState } from "react";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    localStorage.setItem("user", email);
    setSubscribed(true);
  };

  return (
    <div className="container">
      {subscribed ? (
        <p>Thank you for subscribing!</p>
      ) : (
        <form className="newsletter" onSubmit={handleSubmit}>
          <label htmlFor="email">Sign up for our latest deals!</label>
          <br />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="my@email.com"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
          <input type="submit" id="submit-email" value="Submit" />
        </form>
      )}
    </div>
  );
}
