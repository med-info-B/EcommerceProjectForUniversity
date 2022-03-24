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
exports.ProductAccessMongoDB = void 0;
const product_schema_1 = require("./../../../schema/product.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProductAccessMongoDB = class ProductAccessMongoDB {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async getAllProductFiltredByName(name) {
        return await this.productModel.find({ category: name });
    }
    async getAllProduct() {
        return await this.productModel.find({});
    }
    async isDbEmpt() {
        const isEmpty = await this.productModel.find({});
        if (!isEmpty) {
            return true;
        }
        return false;
    }
    async removeOnProduct(_id) {
        await this.productModel.deleteOne({ _id }).catch((e) => console.log('Error of reading from db'));
    }
    async removeAllProduct() {
        await this.productModel.deleteMany({});
    }
    async getOneProduct(_id) {
        return await this.productModel.findOne({ _id }).catch((e) => console.log('Error of reading from db', e));
    }
    async updateProduct(product, _id) {
        await this.productModel.updateOne({ _id }, product).catch((err) => console.log('error of writing in db'));
        return this.getOneProduct(_id);
    }
    async pushProduct(product) {
        const productCreated = await new this.productModel(product).save();
        if (!productCreated) {
            console.log('Error to write in db');
        }
        return productCreated;
    }
};
ProductAccessMongoDB = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProductAccessMongoDB);
exports.ProductAccessMongoDB = ProductAccessMongoDB;
//# sourceMappingURL=productAccessDB.js.map