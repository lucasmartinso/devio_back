import * as productsRepository from "../repositories/productRepository.js";

export async function getCategories(req, res) { 
    const productRepository  = await productsRepository.allCategories();

    console.log(productRepository);

    res.status(200).send(productRepository);
} 

export async function getProducts(req, res) { 
    res.status(200);
}

export async function getProductsCategorie(req, res) { 
    res.status(200);
}