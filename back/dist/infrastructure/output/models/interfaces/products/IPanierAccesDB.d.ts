import { ObjectId } from "mongodb";
import { IProduct } from "./IProductAccessDB";
export interface IPanierAccessDB {
    addToPanier(_idProduct: ObjectId, _idUser: ObjectId): Promise<void>;
    existProductFiltredByIdproduct(idProd: ObjectId): Promise<Boolean>;
    existProductFiltredByIdUSer(idUser: ObjectId): Promise<Boolean>;
    getAllProductFromPanier(idUser: ObjectId): Promise<Array<IProduct> | void>;
    deletOneProductFromPanier(idProduct: ObjectId, idUser: ObjectId): any;
    existProduct(idProduct: ObjectId, idUser: ObjectId): Promise<Boolean>;
}
