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
exports.UserController = void 0;
const mongodb_1 = require("mongodb");
const common_1 = require("@nestjs/common");
const user_dto_1 = require("../dto/input/user.dto");
const user_1 = require("../../package/config/constantes/user/user");
const swagger_1 = require("@nestjs/swagger");
const roles_guard_1 = require("../../../infrastructure/package/config/autorisation/roles.guard");
const roles_decorator_1 = require("../../package/config/autorisation/roles.decorator");
let UserController = class UserController {
    constructor(userService) {
        this.userService = userService;
    }
    async createUser(userCreateDtp) {
        return await this.userService.subscribbe(userCreateDtp);
    }
    async login(credential) {
        return await this.userService.login(credential);
    }
    async makeRequestForgetPassWord(request) {
        return this.userService.requestForgotPassWord(request.email);
    }
    async checkCodeSentByEmail(req) {
        return this.userService.checkCode(req);
    }
    async changePassWord(req) {
        return this.userService.changePassWord(req);
    }
    async updateProfile(profile) {
        return await this.userService.updateProfile(profile);
    }
    async updateAddress(id, address) {
        return await this.userService.updateAddress(new mongodb_1.ObjectId(id), address);
    }
    async getAddress(id) {
        return await this.userService.getAddressOfClient(new mongodb_1.ObjectId(id));
    }
    async createAdmin(adminCreateDtp) {
        console.log('heho');
        return await this.userService.subscribbe(adminCreateDtp);
    }
    async getAllUser() {
        return await this.userService.findAllUser();
    }
};
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginCredentialDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/forgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.DemandChangePasswodByEmailDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "makeRequestForgetPassWord", null);
__decorate([
    (0, common_1.Post)('/forgotPassword/checkCode'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.checkRandomNumberDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkCodeSentByEmail", null);
__decorate([
    (0, common_1.Put)('/updatePassWord'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.ChangePassWordDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "changePassWord", null);
__decorate([
    (0, common_1.Patch)('/updateProfile'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.UpdateProfileDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Put)('/updateAddress'),
    (0, swagger_1.ApiResponse)({ status: 201, description: 'The record has been successfully updated.' }),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Query)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_dto_1.UpdateAddressDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "updateAddress", null);
__decorate([
    (0, common_1.Get)('/address'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAddress", null);
__decorate([
    (0, common_1.Post)('/AddAdmin'),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateAdminDTO]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createAdmin", null);
__decorate([
    (0, common_1.Get)(''),
    (0, common_1.UseGuards)(roles_guard_1.RolesGuard),
    (0, roles_decorator_1.Roles)('admin'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAllUser", null);
UserController = __decorate([
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)(user_1.USER_SERVICE)),
    __metadata("design:paramtypes", [Object])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map