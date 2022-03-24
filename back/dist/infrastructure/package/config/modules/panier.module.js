"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanierModule = void 0;
const product_module_1 = require("./product.module");
const panier_schema_1 = require("../../../output/models/schema/panier.schema");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_module_1 = require("../../config/modules/user.module");
const auth_middleware_1 = require("../middleware/auth.middleware");
const panierConstant_1 = require("../constantes/panier/panierConstant");
const panier_controller_1 = require("../../../input/api/panier.controller");
const panierService_1 = require("../../../../domain/panier/panierService");
const panierAccessDB_1 = require("../../../output/models/services/accessDB/panier/panierAccessDB");
let PanierModule = class PanierModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: '/panier/register', method: common_1.RequestMethod.POST }, { path: '/panier/:id', method: common_1.RequestMethod.DELETE }, { path: '/panier', method: common_1.RequestMethod.GET });
    }
};
PanierModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule,
            mongoose_1.MongooseModule.forFeature([
                { name: panier_schema_1.Panier.name, schema: panier_schema_1.PanierSchema },
            ]),
            product_module_1.ProductModule,
        ],
        providers: [
            {
                useClass: panierService_1.PanierService,
                provide: panierConstant_1.PANIER_SERVICE,
            },
            {
                useClass: panierAccessDB_1.PanierAccessMongoDB,
                provide: panierConstant_1.PANIER_ACCESS_MONGODB,
            },
        ],
        controllers: [panier_controller_1.PanierController]
    })
], PanierModule);
exports.PanierModule = PanierModule;
;
//# sourceMappingURL=panier.module.js.map