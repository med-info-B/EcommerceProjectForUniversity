import { Product } from '../../infrastructure/output/models/schema/product.schema';
import { Panier } from '../../../schema/panier.schema';
import { IProduct } from '../../../interfaces/products/IProductAccessDB';
import { Model } from 'mongoose';
import { IPanierAccessDB } from '../../../interfaces/products/IPanierAccesDB';
import { ObjectId } from 'mongodb';
export declare class PanierAccessMongoDB implements IPanierAccessDB {
    private readonly paniertModel;
    private readonly productModel;
    constructor(paniertModel: Model<Panier>, productModel: Model<Product>);
    existProduct(idProduct: ObjectId, idUser: ObjectId): Promise<Boolean>;
    existProductFiltredByIdproduct(idProd: ObjectId): Promise<Boolean>;
    existProductFiltredByIdUSer(idUser: ObjectId): Promise<Boolean>;
    getAllProductFromPanier(idUser: ObjectId): Promise<void | Array<IProduct>>;
    deletOneProductFromPanier(idProduct: ObjectId, idUser: ObjectId): Promise<void>;
    addToPanier(_idProduct: ObjectId, _idUser: ObjectId): Promise<void>;
}
