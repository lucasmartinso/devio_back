import { Router } from "express";
import * as productsController from "../controllers/productsController.js";

const productsRouter = Router();

productsRouter.get("/products");
productsRouter.get("/products/:categorie"); 
productsRouter.get("/categories", productsController.getCategories);

export default productsRouter; 