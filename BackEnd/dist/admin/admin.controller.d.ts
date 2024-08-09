import { AdminService } from './admin.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDto } from './dto/Login.dto';
export declare class AdminController {
    private readonly adminservice;
    constructor(adminservice: AdminService);
    login(loginDto: LoginDto): Promise<{
        Message: string;
        result: {
            user: import("./entities/admin.entity").Admin;
            access_token: string;
        };
    }>;
    register(registerDto: RegisterDto): Promise<{
        message: string;
        result: {
            user: {
                name: string;
                email: string;
                password: any;
            } & import("./entities/admin.entity").Admin;
            access_token: string;
        };
    }>;
}
