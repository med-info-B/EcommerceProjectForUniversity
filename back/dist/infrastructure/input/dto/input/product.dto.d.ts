import { CategoryType } from './../../../output/models/interfaces/products/IProductAccessDB';
export declare class CreateProductDTO {
    name: string;
    description: string;
    author: string;
    price: number;
    category: CategoryType;
}
export declare class GetProductsFiltredByName {
    name: string;
}
