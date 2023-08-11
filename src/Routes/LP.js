import React from 'react';
import ButtonGroup from '../Components/ButtonGroup'
import '../Assets/styles.css';


function handlePurchaseClick(){
    window.dataLayer.push({
        event: "purchase",
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


function SalesPage() {
    return (
        <div>
            <div className="header">
                <h1>Produto Incrivelmente Fantástico</h1>
                <p>Sua Solução para uma Vida Melhor!</p>
            </div>
            <div className="product-info">
                <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Produto Incrivelmente Fantástico" />
                <p>APENAS R$25,98</p>
            </div>
            <div className="purchase-section">
                <h2>Adquira Hoje o Seu Produto Incrivelmente Fantástico!</h2>
                <p>Não perca essa oportunidade de mudar a sua vida.</p>
                <button onClick={handlePurchaseClick} className="purchase-button">COMPRAR AGORA</button>
            </div>
            <hr className="divider" />
            <ButtonGroup />
        </div>
    );
}

export default SalesPage;


