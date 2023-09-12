const Footer = ({email, address, logoUrl}) => {
    return (
    <footer className="footer">
        <div className="layout">
            <h2>Follow us</h2>
            <div className="footer__buttons">
                <a href="#" className="button primary fb">Facebook</a>
                <a href="#" className="button primary ig">Instagram</a>
                <a href="#" className="button primary www">Website</a>
                <a href="#" className="button primary ms">My Space</a>
            </div>
        </div>
        <div className="layout copyright">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis sequi, nam quam accusamus nesciunt fugit?</p>
        </div>
    </footer>
    )
}

export default Footer;