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
exports.PanierController = void 0;
const mongodb_1 = require("mongodb");
const common_1 = require("@nestjs/common");
const panierConstant_1 = require("../../package/config/constantes/panier/panierConstant");
const panier_dto_1 = require("../dto/input/panier.dto");
let PanierController = class PanierController {
    constructor(panierService) {
        this.panierService = panierService;
    }
    async getAllProduct(idU) {
        return await this.panierService.findAllProductFromPanier(new mongodb_1.ObjectId(idU));
    }
    async deletOneProductFromPanier(idPro, idUs) {
        console.log(idPro, "  ;  ", idUs);
        return await this.panierService.removeOneProductFromPanier(new mongodb_1.ObjectId(idPro), new mongodb_1.ObjectId(idUs));
    }
    async addProductToPanier(panier) {
        const { idProduct, idUser } = panier;
        return await this.panierService.addToPanier(new mongodb_1.ObjectId(idProduct), new mongodb_1.ObjectId(idUser));
    }
};
__decorate([
    (0, common_1.Get)('products/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PanierController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Delete)('/product'),
    __param(0, (0, common_1.Query)('idPro')),
    __param(1, (0, common_1.Query)('idU')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PanierController.prototype, "deletOneProductFromPanier", null);
__decorate([
    (0, common_1.Post)('/Addproducts'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [panier_dto_1.AddProductToPanier]),
    __metadata("design:returntype", Promise)
], PanierController.prototype, "addProductToPanier", null);
PanierController = __decorate([
    (0, common_1.Controller)('panier'),
    __param(0, (0, common_1.Inject)(panierConstant_1.PANIER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], PanierController);
exports.PanierController = PanierController;
//# sourceMappingURL=panier.controller.js.map