"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const Database_mudule_1 = require("./Database.mudule");
async function bootstrap() {
    const app = await core_1.NestFactory.create(Database_mudule_1.DatabasModule);
    app.enableCors({ origin: 'http://localhost:3001',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Accept',
    });
    await app.listen(5000);
}
bootstrap();
//# sourceMappingURL=main.js.map