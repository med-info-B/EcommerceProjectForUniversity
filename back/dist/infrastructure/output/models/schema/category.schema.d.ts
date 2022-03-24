import { Product } from './product.schema';
import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
export declare class Panier extends Document {
    _id: ObjectId;
    product: Product;
}
export declare const PanierSchema: import("mongoose").Schema<Panier, import("mongoose").Model<Panier, any, any, any>, any, any>;
