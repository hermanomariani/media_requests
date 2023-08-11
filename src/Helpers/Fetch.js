import React from "react";

export async function getProductList(){
    let products= await fetch('https://fakestoreapi.com/products?limit=10')

    return products
}

export async function getProduct({ params }){

    let product= await fetch(`https://fakestoreapi.com/products/${params.id}`)

    return product
}