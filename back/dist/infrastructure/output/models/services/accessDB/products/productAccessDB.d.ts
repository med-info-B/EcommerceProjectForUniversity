import { Product } from './../../../schema/product.schema';
import { IProduct, IUserAccessDB } from '../../../interfaces/products/IProductAccessDB';
import { Model } from 'mongoose';
import { ObjectId } from "mongodb";
export declare class ProductAccessMongoDB implements IUserAccessDB {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    getAllProductFiltredByName(name: string): Promise<void | [IProduct]>;
    getAllProduct(): Promise<void | [IProduct]>;
    isDbEmpt(): Promise<void | Boolean>;
    removeOnProduct(_id: ObjectId): Promise<void>;
    removeAllProduct(): Promise<void>;
    getOneProduct(_id: ObjectId): Promise<Object | void>;
    updateProduct(product: IProduct, _id: ObjectId): Promise<IProduct | void>;
    pushProduct(product: IProduct): Promise<IProduct | void>;
}
