"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabasModule = void 0;
const common_1 = require("@nestjs/common");
const students_module_1 = require("./students/students.module");
const typeorm_1 = require("@nestjs/typeorm");
const parents_module_1 = require("./parents/parents.module");
const admin_module_1 = require("./admin/admin.module");
const teacher_module_1 = require("./teacher/teacher.module");
const subjects_module_1 = require("./subjects/subjects.module");
let DatabasModule = class DatabasModule {
};
exports.DatabasModule = DatabasModule;
exports.DatabasModule = DatabasModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: '12345',
                database: 'allgood',
                autoLoadEntities: true,
                synchronize: true,
            }),
            admin_module_1.AdminModule,
            students_module_1.StudentsModule,
            parents_module_1.ParentsModule,
            teacher_module_1.TeacherModule,
            subjects_module_1.SubjectsModule
        ],
        controllers: [],
        providers: [],
    })
], DatabasModule);
//# sourceMappingURL=Database.mudule.js.map