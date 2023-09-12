import { useEffect } from "react";
import Header from "./Header";
import IntroSlider from "./IntroSlider";
import Services from "./Services";
import PreFooter from "./PreFooter";
import Footer from "./Footer";
import './template.less';

const WebTemplate2 = ({ email, address, logoUrl }) => {
    useEffect(() => {
        document.body.classList = [];
        document.body.classList.add('template2');
    }, []);

    return (
        <>
            <Header logoUrl={logoUrl} email={email} address={address} />
            <IntroSlider />
            <Services />
            <PreFooter />
            <Footer />
        </>
    )
}

export default WebTemplate2;
