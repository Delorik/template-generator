import React, { useState } from "react";
import RadioButtons from "./RadioButtons";

const WebConfig = ({ onGenerate }) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [logo, setLogo] = useState("");
    const [logoUrl, setLogoUrl] = useState("");

    function handleRadioChange(e) {
        setSelectedOption(e.target.value);
    }

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }

    function handleAddressChange(e) {
        setAddress(e.target.value);
    }

    function handleLogoChange(e) {
        const selectedLogo = e.target.files[0];
        setLogo(selectedLogo);
        if (selectedLogo) {
            const logoUrl = URL.createObjectURL(selectedLogo);
            setLogoUrl(logoUrl);
        } else {
            setLogoUrl(null);
        }
    }

    function handleGenerate() {
        onGenerate({
            selectedOption,
            email,
            address,
            logoUrl
        });
    }

    return (
        <div className="options">
            <div className="layout">
                <p>This simple web generator creates a demo preview of a selected website template with your personalized data. It enables you to use, test and preview the website, making the tough choice of choosing the right web desing much simpler. <br />Continue by selecting one of the templates below!</p>    
                <RadioButtons selectedOption={selectedOption} handleChange={handleRadioChange} />
                <div className="options__field">
                    <p>This information will be displayed in the header, footer or mobile menu of your website (or all). Depending on the template you selected.</p>
                    <input type="email" placeholder="E-mail" id="email" value={email} onChange={handleEmailChange} />
                    <input type="text" placeholder="Address" id="address" value={address} onChange={handleAddressChange} />
                </div>
                <div className="options__field">
                    <p>Here, you can choose your own logo</p>
                    <label htmlFor="logoinput">
                        <input type="file" id="logoinput" accept="image/*" files={logoUrl} onChange={handleLogoChange} />
                    </label>
                    <div className="img-preview">
                        {logoUrl && <img src={logoUrl} alt="Uploaded logo" width='100' />}
                    </div>
                </div>
                <button className="button button__primary" onClick={handleGenerate}>Generate demo preview</button>
            </div>
        </div>
    );
};

export default WebConfig;
