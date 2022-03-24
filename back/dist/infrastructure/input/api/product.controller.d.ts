import { IProductService } from '../../output/models/interfaces/products/IProductService';
import { CreateProductDTO } from '../dto/input/product.dto';
export declare class ProductController {
    private readonly productService;
    constructor(productService: IProductService);
    createproduct(product: CreateProductDTO): Promise<void | import("../../output/models/interfaces/products/IProductAccessDB").IProduct>;
    updateProduct(id: string, product: CreateProductDTO): Promise<void | import("../../output/models/interfaces/products/IProductAccessDB").IProduct>;
    deletOneProduct(id: string): Promise<void>;
    deletAllProduct(): Promise<void>;
    getAllProduct(): Promise<void | [import("../../output/models/interfaces/products/IProductAccessDB").IProduct]>;
    getAllProductFiltredByCategory(category: string): Promise<void | [import("../../output/models/interfaces/products/IProductAccessDB").IProduct]>;
}
