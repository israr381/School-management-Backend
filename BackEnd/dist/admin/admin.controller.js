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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const Register_dto_1 = require("./dto/Register.dto");
const Login_dto_1 = require("./dto/Login.dto");
const passport_1 = require("@nestjs/passport");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async login(loginDto) {
        return this.adminService.login(loginDto);
    }
    async register(registerDto) {
        return this.adminService.register(registerDto);
    }
    async findAll() {
        return this.adminService.findAll();
    }
    async logout() {
        return this.adminService.logout();
    }
    async googleAuth(req) { }
    async delete(id) {
        return this.adminService.delete(id);
    }
    async googleLogin(userProfile, res) {
        try {
            const user = await this.adminService.googleLogin(userProfile);
            if (user && user.access_token) {
                return res.status(200).json(user);
            }
            else {
                return res.status(401).json({ message: 'Google login failed' });
            }
        }
        catch (error) {
            return res.status(500).json({ message: 'Server error', error });
        }
    }
    async findById(id) {
        return this.adminService.findById(id);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('/register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Register_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "register", null);
__decorate([
    (0, common_1.Get)('/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)(),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google')),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "googleAuth", null);
__decorate([
    (0, common_1.Delete)('delete/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)('auth/google/callback'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "googleLogin", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "findById", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map