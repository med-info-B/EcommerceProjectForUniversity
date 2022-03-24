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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const roles_decorator_1 = require("./../../package/config/autorisation/roles.decorator");
const roles_guard_1 = require("./../../package/config/autorisation/roles.guard");
const mongodb_1 = require("mongodb");
const common_2 = require("@nestjs/common");
const constantProduct_1 = require("../../package/config/constantes/product/constantProduct");
const product_dto_1 = require("../dto/input/product.dto");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createproduct(product) {
        return this.productService.createProduct(product);
    }
    async updateProduct(id, product) {
        return await this.productService.updateProduct(product, new mongodb_1.ObjectId(id));
    }
    async deletOneProduct(id) {
        return await this.productService.removeOnProduct(new mongodb_1.ObjectId(id));
    }
    async deletAllProduct() {
        return await this.productService.removeAllProduct();
    }
    async getAllProduct() {
        return await this.productService.findAllProducts();
    }
    async getAllProductFiltredByCategory(category) {
        if (!category) {
            throw new common_1.BadRequestException('name is not empty');
        }
        return await this.productService.findAllProductsFiltredByName(category);
    }
};
__decorate([
    (0, common_2.Post)("/register"),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "createproduct", null);
__decorate([
    (0, common_2.Put)('/:id'),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_2.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, product_dto_1.CreateProductDTO]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_2.Delete)('/:id'),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deletOneProduct", null);
__decorate([
    (0, common_2.Delete)(''),
    (0, common_2.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deletAllProduct", null);
__decorate([
    (0, common_2.Get)(''),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_2.Get)('/filtred'),
    __param(0, (0, common_2.Query)('cat')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProductFiltredByCategory", null);
ProductController = __decorate([
    (0, common_2.Controller)('products'),
    __param(0, (0, common_2.Inject)(constantProduct_1.PRODUCT_SERVICE)),
    __metadata("design:paramtypes", [Object])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map