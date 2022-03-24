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
exports.PanierAccessMongoDB = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const panier_schema_1 = require("../../../schema/panier.schema");
const product_schema_1 = require("../../../schema/product.schema");
let PanierAccessMongoDB = class PanierAccessMongoDB {
    constructor(paniertModel, productModel) {
        this.paniertModel = paniertModel;
        this.productModel = productModel;
    }
    async existProduct(idProduct, idUser) {
        const dd = await this.paniertModel.find({ idProduct: idProduct, idUser: idUser });
        return await this.paniertModel.exists({ idProduct: idProduct, idUser: idUser });
    }
    async existProductFiltredByIdproduct(idProd) {
        const existUser = await this.paniertModel.exists({ idProduct: idProd }).catch(() => console.log('error of db'));
        if (existUser) {
            return true;
        }
        return false;
    }
    async existProductFiltredByIdUSer(idUser) {
        const existUser = await this.paniertModel.exists({ idUser: idUser }).catch(() => console.log('error of db'));
        console.log(existUser);
        if (existUser) {
            return true;
        }
        return false;
    }
    async getAllProductFromPanier(idUser) {
        let prods = [];
        const idU = await this.paniertModel.find({ idUser: idUser });
        for (let index = 0; index < idU.length; index++) {
            const element = idU[index];
            let p = await this.productModel.findOne({ _id: element.idProduct });
            prods.push(p);
        }
        return prods;
    }
    async deletOneProductFromPanier(idProduct, idUser) {
        await this.paniertModel.deleteOne({ _idProduct: idProduct }).catch(e => console.log('error of reading db '));
    }
    async addToPanier(_idProduct, _idUser) {
        const dd = await new this.paniertModel({ idProduct: _idProduct, idUser: _idUser }).save();
    }
};
PanierAccessMongoDB = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(panier_schema_1.Panier.name)),
    __param(1, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model,
        mongoose_2.Model])
], PanierAccessMongoDB);
exports.PanierAccessMongoDB = PanierAccessMongoDB;
//# sourceMappingURL=panierAccessDB.js.map