import { ObjectId } from 'mongodb';
import { IProduct } from './IProductAccessDB';
export interface IPanierService {
    addToPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
    findAllProductFromPanier(idUser: ObjectId): Promise<[IProduct] | void>;
    removeOneProductFromPanier(idProduct: ObjectId, idUser: ObjectId): any;
}
