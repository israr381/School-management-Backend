"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const admin_service_1 = require("./admin.service");
const admin_controller_1 = require("./admin.controller");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const admin_entity_1 = require("./entities/admin.entity");
const google_strategy_1 = require("./google.strategy");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([admin_entity_1.Admin]),
            passport_1.PassportModule,
            jwt_1.JwtModule.register({
                secret: 'YOUR_SECRET_KEY',
                signOptions: { expiresIn: '1h' },
            }),
        ],
        providers: [admin_service_1.AdminService, google_strategy_1.GoogleStrategy],
        controllers: [admin_controller_1.AdminController],
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map