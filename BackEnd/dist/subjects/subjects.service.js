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
exports.SubjectsService = void 0;
const subject_entity_1 = require("./entities/subject.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const teacher_entity_1 = require("../teacher/entities/teacher.entity");
let SubjectsService = class SubjectsService {
    constructor(SubjectRepository, teacherRepository) {
        this.SubjectRepository = SubjectRepository;
        this.teacherRepository = teacherRepository;
    }
    async create(createSubjectDto) {
        const { teacherId, ...subjectData } = createSubjectDto;
        const teacher = await this.teacherRepository.findOne({ where: { id: teacherId } });
        if (!teacher) {
            throw new common_1.NotFoundException(`Teacher with ID ${teacherId} not found`);
        }
        const subject = this.SubjectRepository.create({ ...subjectData, teacher });
        return this.SubjectRepository.save(subject);
    }
    async remove(id) {
        await this.SubjectRepository.delete(id);
    }
    async findAll() {
        return this.SubjectRepository.find({ relations: ['teacher'] });
    }
};
exports.SubjectsService = SubjectsService;
exports.SubjectsService = SubjectsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(subject_entity_1.Subject)),
    __param(1, (0, typeorm_1.InjectRepository)(teacher_entity_1.Teacher)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], SubjectsService);
//# sourceMappingURL=subjects.service.js.map