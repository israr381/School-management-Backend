"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const addStudent_dto_1 = require("./addStudent.dto");
class UpdateStudentDto extends (0, mapped_types_1.PartialType)(addStudent_dto_1.addStudentDto) {
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=update-student.dto.js.map