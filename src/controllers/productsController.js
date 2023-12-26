import * as productsService from "../services/productService.js";

export async function getCategories(req, res) { 
    const productRepository  = await productsService.allCategories();

    res.status(200).send(productRepository);
} 

export async function getProducts(req, res) { 
    res.status(200);
}

export async function getProductsCategorie(req, res) { 
    res.status(200);
}