import { AddProductToPanier } from '../dto/input/panier.dto';
import { IPanierService } from 'src/domain/ports/panier/IPanierService';
export declare class PanierController {
    private readonly panierService;
    constructor(panierService: IPanierService);
    getAllProduct(idU: string): Promise<void | [import("../../output/models/interfaces/products/IProductAccessDB").IProduct]>;
    deletOneProductFromPanier(idPro: string, idUs: string): Promise<any>;
    addProductToPanier(panier: AddProductToPanier): Promise<void>;
}
