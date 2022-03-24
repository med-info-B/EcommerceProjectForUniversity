import { ObjectId } from "mongodb";
import { IPanierService } from "../ports/panier/IPanierService";
import { PanierAccessMongoDB } from "src/infrastructure/output/models/services/accessDB/panier/panierAccessDB";
import { IProduct } from "src/infrastructure/output/models/interfaces/products/IProductAccessDB";
export declare class PanierService implements IPanierService {
    private readonly db;
    constructor(db: PanierAccessMongoDB);
    findAllProductFromPanier(idUser: ObjectId): Promise<void | [IProduct]>;
    removeOneProductFromPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
    addToPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
}
