import './main.less';
import React, { useState, useEffect } from "react";
import WebConfig from "./Main/WebConfig";
import Intro from "./Main/Intro";
import WebTemplate1 from "./Template1/WebTemplate1";
import WebTemplate2 from "./Template2/WebTemplate2";

const App = () => {

    // Reasurring main screen doesn't get any template class
    useEffect(() => {
        document.body.classList = [];
    }, []);

    const [displayedContent, setDisplayedContent] = useState(null);

    function handleGenerate({ email, address, selectedOption, logoUrl }) {
        // Check if a template is selected
        if (!selectedOption) {
            alert('Please choose one of the templates!');
            return;
        }
        if (!email || !address || !logoUrl) {
            alert('Please fill out all the information!');
            return;
        }
        
        // Determine which component to display based on the selected option
        switch (selectedOption) {
            case "option1":
                setDisplayedContent(<WebTemplate1 email={email} address={address} logoUrl={logoUrl} />);
                break;
            case "option2":
                setDisplayedContent(<WebTemplate2 email={email} address={address} logoUrl={logoUrl} />);
                break;
            default:
                setDisplayedContent(null);
        }
    }


    return (
        <>
            {displayedContent ? (
                displayedContent
            ) : (
                <>
                    <Intro />
                    <WebConfig onGenerate={handleGenerate} />
                </>
            )}
        </>
    );
};

export default App;
