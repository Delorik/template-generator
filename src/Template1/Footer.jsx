const Footer = ({email, address, logoUrl}) => {
    return (
    <footer className="footer">
        <div className="layout columns">
            <div className="col"><a href="#" className="logo"><img src={logoUrl} alt="logo" /></a></div>
            <div className="col"><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat amet libero, illo quidem voluptas odit.</p></div>
            <div className="col">
                <ul>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Lorem</a></li>
                    <li><a href="#">Ipsum</a></li>
                </ul>
            </div>
            <div className="col">
                <ul>
                    <li><a className="email" href="#">{email}</a></li>
                    <li><a className="address" href="#">{address}</a></li>
                </ul>
            </div>
        </div>
        <div className="layout copyright">
            <p>© Copyright</p>
        </div>
    </footer>
    )
}

export default Footer;