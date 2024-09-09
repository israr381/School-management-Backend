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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const subject_entity_1 = require("../../subjects/entities/subject.entity");
const typeorm_1 = require("typeorm");
let Teacher = class Teacher {
};
exports.Teacher = Teacher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Teacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Teacher.prototype, "dateOfBirth", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "bloodGroup", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "religion", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Teacher.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Teacher.prototype, "admissionDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => subject_entity_1.Subject, subject => subject.teacher),
    __metadata("design:type", Array)
], Teacher.prototype, "subjects", void 0);
exports.Teacher = Teacher = __decorate([
    (0, typeorm_1.Entity)()
], Teacher);
//# sourceMappingURL=teacher.entity.js.map