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
exports.AdminService = void 0;
const jwt_1 = require("@nestjs/jwt");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const typeorm_2 = require("typeorm");
const bcrypt = require("bcryptjs");
let AdminService = class AdminService {
    constructor(adminRepository, jwtService) {
        this.adminRepository = adminRepository;
        this.jwtService = jwtService;
    }
    async register(registerDto) {
        try {
            const user = await this.adminRepository.save({
                name: registerDto.name,
                email: registerDto.email,
                password: await bcrypt.hash(registerDto.password, 10),
            });
            if (!user) {
                throw new common_1.HttpException('user not found', common_1.HttpStatus.BAD_REQUEST);
            }
            const payload = {
                id: user.id,
            };
            const access_token = await this.jwtService.signAsync(payload);
            console.log(user);
            return {
                message: 'user register successfully',
                result: {
                    user,
                    access_token,
                }
            };
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.STATUS_CODES);
        }
    }
    async login(loginDto) {
        try {
            const user = await this.adminRepository.findOne({
                where: { email: loginDto.email }
            });
            console.log(user);
            if (!user) {
                throw new common_1.HttpException('user not found', common_1.HttpStatus.BAD_REQUEST);
            }
            const compare = await bcrypt.compare(loginDto.password, user.password);
            if (compare) {
                const payload = {
                    id: user.id
                };
                if (!compare) {
                    throw new common_1.HttpException('password is incorrect', common_1.HttpStatus.BAD_REQUEST);
                }
                const access_token = await this.jwtService.signAsync(payload);
                return {
                    Message: "Admin Login Successfully",
                    result: {
                        user,
                        access_token
                    }
                };
            }
            else {
                throw new common_1.HttpException('incorrecct credential', common_1.HttpStatus.BAD_REQUEST);
            }
        }
        catch (error) {
            throw new common_1.HttpException(error.message, error.STATUS_CODES);
        }
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(admin_entity_1.Admin)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AdminService);
//# sourceMappingURL=admin.service.js.map