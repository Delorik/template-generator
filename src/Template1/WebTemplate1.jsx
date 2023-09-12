import { useEffect } from "react";
import Header from "./Header";
import Intro from "./Intro";
import Tiles from "./Tiles";
import Services from "./Services";
import './template.less';
import Footer from "./Footer";
import PreFooter from "./PreFooter";
import Shadow from "./Shadow";

const WebTemplate1 = ({ email, address, logoUrl }) => {
    useEffect(() => {
        document.body.classList = [];
        document.body.classList.add('template1');
    }, []);

    return (
        <>
            <Shadow />
            <Header logoUrl={logoUrl} email={email} address={address} />
            <Intro />
            <Tiles />
            <Services />
            <PreFooter />
            <Footer logoUrl={logoUrl} email={email} address={address} />
        </>
    )
}

export default WebTemplate1;
