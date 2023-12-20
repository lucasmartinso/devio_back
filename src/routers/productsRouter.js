import { Router } from "express";

const productsRouter = Router();

productsRouter.get("/products");
productsRouter.get("/products/:categorie"); 

export default productsRouter; 