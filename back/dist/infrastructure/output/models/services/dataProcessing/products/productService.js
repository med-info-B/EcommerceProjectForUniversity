"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const constantProduct_1 = require("../../../../../package/config/constantes/product/constantProduct");
const productAccessDB_1 = require("../../accessDB/products/productAccessDB");
let ProductsService = class ProductsService {
    constructor(db) {
        this.db = db;
    }
    async findAllProductsFiltredByName(name) {
        const productsExist = await this.db.getAllProductFiltredByName(name);
        if (!productsExist) {
            throw new common_1.NotFoundException('product not found');
        }
        return productsExist;
    }
    async findAllProducts() {
        const productsExist = await this.db.getAllProduct();
        if (!productsExist) {
            throw new common_1.NotFoundException('product not found');
        }
        return productsExist;
    }
    async removeOnProduct(_id) {
        const isProductExist = await this.db.getOneProduct(_id);
        if (!isProductExist) {
            throw new common_1.NotFoundException('Product don t exist');
        }
        await this.db.removeOnProduct(_id);
    }
    async removeAllProduct() {
        const isEmpty = await this.db.isDbEmpt();
        if (!isEmpty) {
            await this.db.removeAllProduct();
        }
        else
            throw new common_1.NotFoundException('Any Element in the DB');
    }
    async updateProduct(product, _id) {
        return await this.db.updateProduct(product, _id);
    }
    async createProduct(product) {
        return await this.db.pushProduct(product);
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constantProduct_1.PRODUCT_ACCESS_MONGODB)),
    __metadata("design:paramtypes", [productAccessDB_1.ProductAccessMongoDB])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=productService.js.map