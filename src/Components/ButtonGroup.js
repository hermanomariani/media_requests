import React from "react";
import Button from "./Button"

function ButtonGroup() {
    const buttonLabels = [
     //Midias para disparo isolado e referencias
     "Google Ads - Rmkt",
     "Google Ads - Conversão",
     "Meta",
     "DV360 - Contador",
     "DV360 - Conversão",
     "Microsoft Ads (Bing)",
     "TikTok",
     "Criteo",
     "Awin",
     "Afilio" 
    ];

    return (
        <div className="button-group">
            {buttonLabels.map((label, index) => (
                <Button key={index} label={label} />
            ))}
        </div>
    );
}

export default ButtonGroup