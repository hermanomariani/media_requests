import React from "react";

export default function Modal (props) {

    const mediaDocMap = {
            //Midias para disparo isolado e referencias
            "Google Ads - Rmkt": "https://support.google.com/tagmanager/answer/6106960?hl=pt-BR&ref_topic=6334091&sjid=9388877706812474972-SA",
            "Google Ads - Conversão": "https://support.google.com/tagmanager/answer/6105160?hl=en",
            "Meta":'https://developers.facebook.com/docs/meta-pixel/implementation/conversion-tracking#standard-events',
            "DV360 - Contador": "https://support.google.com/searchads/answer/7551951?hl=en",
            "DV360 - Conversão": "https://support.google.com/searchads/answer/7551951?hl=en",
            "Microsoft Ads (Bing)": "http://www.example.com",
            "TikTok": "http://www.example.com",
            "Criteo": "http://www.example.com",
            "Awin": "http://www.example.com",
            "Afilio": "http://www.example.com" 
    }

    const stringSearchNetworkMap = {
        //Midias para disparo isolado e referencias
        "Google Ads - Rmkt": "<ID da Conta> ou /random/",
        "Google Ads - Conversão": "<Rótulo de Conversão> ou /random/",
        "Meta":'<Pixel ID> ou /facebook.*id/',
        "DV360 - Contador": "<ID da Conta>",
        "DV360 - Conversão": "<ID da Conta>",
        "Microsoft Ads (Bing)": "http://www.example.com",
        "TikTok": "http://www.example.com",
        "Criteo": "http://www.example.com",
        "Awin": "http://www.example.com",
        "Afilio": "http://www.example.com" 
}

    const dataLayerPush = () => {
        window.dataLayer.push({
            event: props.label,
            transactionId: 'ID'+ String(Math.floor(Math.random()*(10**5))),
            products: [{
                name:"Mochila Incrível Azul",
                id: "MOC12345",
                quantity:1,
                price: 25.98,
                category: 'Variedades'
            }]
        })
    }
    return (
    <div className="modal-overlay">
    <div className="modal-content">
        <span className="close-button" onClick={props.handleCloseModal}>&times;</span>
        <h3 className="modal-title">{props.label}</h3>
        <p className="modal-text">Especificações: <a href={mediaDocMap[props.label]}>Link</a></p>
        {/* <p className="modal-text">Example Purchase Tag Code: [Code]</p> */}
        <p className="modal-text">Network Filter: <strong>{stringSearchNetworkMap[props.label]}</strong></p>
        <button className="modal-button" onClick={dataLayerPush}>Disparar Tag de Conversão</button>
    </div>
</div>
    )
}
