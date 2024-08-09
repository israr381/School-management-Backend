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
exports.ParentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const parent_entity_1 = require("./entities/parent.entity");
const typeorm_2 = require("typeorm");
let ParentsService = class ParentsService {
    constructor(parentRepository) {
        this.parentRepository = parentRepository;
    }
    async create(createParentDto) {
        try {
            const parent = this.parentRepository.create(createParentDto);
            await this.parentRepository.save(parent);
            return {
                message: 'Parent created successfully',
                parent
            };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async FindAllParents() {
        try {
            const user = await this.parentRepository.find({});
            return {
                message: 'All Parents fetched successfully',
                user
            };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    findOne(id) {
        return `This action returns a #${id} parent`;
    }
    update(id, updateParentDto) {
        return `This action updates a #${id} parent`;
    }
    remove(id) {
        return `This action removes a #${id} parent`;
    }
};
exports.ParentsService = ParentsService;
exports.ParentsService = ParentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(parent_entity_1.Parent)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ParentsService);
//# sourceMappingURL=parents.service.js.map