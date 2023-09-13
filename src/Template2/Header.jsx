import { useEffect } from "react";
import $ from 'jquery';

const Header = ({logoUrl, email, address}) => {
    useEffect(() => {
        const burger = $('.hamburger');
        burger.on('click', function(e) {
            if (!$('body').is('.mob-exp')) {
                $('body').addClass('mob-exp');
            } else {
                $('body').removeClass('mob-exp');
            }
        });

        $('body').on('click', function(e) {
            if (!$(e.target).closest('.nav').length && !$(e.target).closest('.hamburger').length) {
                $('body').removeClass('mob-exp');
            }
        });

        return () => {
            burger.off('click');
        };
    }, []);
    
    return (
    <header className="header">
        <div className="layout">
            <a href="#" id="logo"><img src={logoUrl} alt="logo" /></a>
            <div className="hamburger"></div>
        </div>
            <ul className="nav">
                <li><a href="#">Services</a></li>
                <li><a href="#">Contacts</a></li>
                <li><a href="#">Search</a></li>
                <li><a href="#" className="button secondary"><span>Configuration</span></a></li>
                <li><a href="#" className="email">{email}</a></li>
                <li><a href="#" className="address">{address}</a></li>
            </ul>
    </header>
    )
}

export default Header;