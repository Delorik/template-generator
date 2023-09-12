import { useEffect } from "react";
import $ from 'jquery';

const Header = ({ logoUrl, email, address }) => {
    useEffect(() => {
        let isMobile = true;
        $(window).on('resize', function (e) {
            if (window.innerWidth <= 768) {
                isMobile = true;
            }
            else {
                isMobile = false;
                $('body').removeClass('mob-exp');
            }
        });
        const burger = $('.hamburger');
        burger.on('click', function (e) {
            if (!$('body').is('.mob-exp') && isMobile) {
                $('body').addClass('mob-exp');
            } else {
                $('body').removeClass('mob-exp');
            }
        });

        $('body').on('click', function(e) {
            if (e.target.closest('.shadow')) {
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
                <ul className="nav">
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Search</a></li>
                    <li><a href="#" className="button primary">Configuration</a></li>
                </ul>
                <div className="hamburger"></div>
                <div className="nav-mobile">
                    <a href="#" className="email">{email}</a>
                    <a href="#" className="address">{address}</a>
                    <ul>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">Search</a></li>
                        <li><a href="#" className="button secondary">Configuration</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;