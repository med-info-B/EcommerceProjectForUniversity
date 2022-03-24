import { IPanierService } from '../../../interfaces/products/IPanierService';
import { ObjectId } from "mongodb";
import { PanierAccessMongoDB } from "../../accessDB/panier/panierAccessDB";
import { IProduct } from "../../../interfaces/products/IProductAccessDB";
export declare class PanierService implements IPanierService {
    private readonly db;
    constructor(db: PanierAccessMongoDB);
    findAllProductFromPanier(idUser: ObjectId): Promise<void | [IProduct]>;
    removeOneProductFromPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
    addToPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
}
