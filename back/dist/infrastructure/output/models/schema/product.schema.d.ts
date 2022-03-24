import { ObjectId } from 'mongodb';
import { Document } from 'mongoose';
export declare class Product extends Document {
    _id: ObjectId;
    name: String;
    description: string;
    author: string;
    price: String;
    category: string;
}
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any>, any, any>;
