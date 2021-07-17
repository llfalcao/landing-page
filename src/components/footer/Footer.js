let Footer = (
    <footer className="footer" id="contact">
        <form className="newsletter">
            <label for="email">Sign up for our latest deals!</label>
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
    </footer>
);

export default Footer;
