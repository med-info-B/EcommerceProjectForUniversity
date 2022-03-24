"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_controller_1 = require("../../../input/api/product.controller");
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("../../../output/models/schema/product.schema");
const user_module_1 = require("../../config/modules/user.module");
const auth_middleware_1 = require("../middleware/auth.middleware");
const productAccessDB_1 = require("../../../output/models/services/accessDB/products/productAccessDB");
const productService_1 = require("../../../output/models/services/dataProcessing/products/productService");
const constantProduct_1 = require("../../config/constantes/product/constantProduct");
let ProductModule = class ProductModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: '/products/register', method: common_1.RequestMethod.POST }, { path: '/products/:id', method: common_1.RequestMethod.PUT }, { path: '/products/:id', method: common_1.RequestMethod.DELETE }, { path: '/products', method: common_1.RequestMethod.DELETE });
    }
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: product_schema_1.Product.name, schema: product_schema_1.ProductSchema },
            ])
        ],
        providers: [
            {
                useClass: productService_1.ProductsService,
                provide: constantProduct_1.PRODUCT_SERVICE,
            },
            {
                useClass: productAccessDB_1.ProductAccessMongoDB,
                provide: constantProduct_1.PRODUCT_ACCESS_MONGODB,
            },
        ],
        controllers: [product_controller_1.ProductController],
        exports: [mongoose_1.MongooseModule]
    })
], ProductModule);
exports.ProductModule = ProductModule;
;
//# sourceMappingURL=product.module.js.map