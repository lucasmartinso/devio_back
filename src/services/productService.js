import * as productRepository from "../repositories/productRepository.js";

export async function allCategories() { 
    const { rows }  = productRepository.allCategories(); 

    return rows;
}