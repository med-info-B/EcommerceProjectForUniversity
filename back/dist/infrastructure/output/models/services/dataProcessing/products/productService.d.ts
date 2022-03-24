import { ProductAccessMongoDB } from "../../accessDB/products/productAccessDB";
import { IProductService } from '../../../interfaces/products/IProductService';
import { IProduct } from "../../../interfaces/products/IProductAccessDB";
import { ObjectId } from "mongodb";
export declare class ProductsService implements IProductService {
    private readonly db;
    constructor(db: ProductAccessMongoDB);
    findAllProductsFiltredByName(name: string): Promise<void | [IProduct]>;
    findAllProducts(): Promise<void | [IProduct]>;
    removeOnProduct(_id: ObjectId): Promise<void>;
    removeAllProduct(): Promise<void>;
    updateProduct(product: IProduct, _id: ObjectId): Promise<IProduct | void>;
    createProduct(product: IProduct): Promise<IProduct | void>;
}
