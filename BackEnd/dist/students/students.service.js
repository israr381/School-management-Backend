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
exports.StudentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const student_entity_1 = require("./entities/student.entity");
const typeorm_2 = require("typeorm");
let StudentsService = class StudentsService {
    constructor(studentRepository) {
        this.studentRepository = studentRepository;
    }
    async create(addStudentDto) {
        try {
            const addStudent = this.studentRepository.create(addStudentDto);
            await this.studentRepository.save(addStudent);
            return {
                message: 'Student created successfully',
                addStudent
            };
        }
        catch (error) {
            console.log(error.message);
        }
    }
    async getrouter() {
        try {
            const user = await this.studentRepository.find({ relations: ['parent'] });
            return {
                message: 'All students fetched successfully',
                user
            };
        }
        catch (error) {
            console.log(error);
        }
    }
    findOne(id) {
        return `This action returns a #${id} student`;
    }
    update(id, updateStudentDto) {
        return `This action updates a #${id} student`;
    }
    remove(id) {
        return `This action removes a #${id} student`;
    }
    async findAllStudents() {
        return this.studentRepository.find({
            relations: ['parent']
        });
    }
};
exports.StudentsService = StudentsService;
exports.StudentsService = StudentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(student_entity_1.Student)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StudentsService);
//# sourceMappingURL=students.service.js.map