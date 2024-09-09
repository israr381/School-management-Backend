import { AdminService } from './admin.service';
import { RegisterDto } from './dto/Register.dto';
import { LoginDto } from './dto/Login.dto';
import { Response } from 'express';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
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
    findAll(): Promise<import("./entities/admin.entity").Admin[]>;
    logout(): Promise<{
        message: string;
    }>;
    googleAuth(req: any): Promise<void>;
    delete(id: string): Promise<{
        message: string;
    }>;
    googleLogin(userProfile: any, res: Response): Promise<Response<any, Record<string, any>>>;
    findById(id: string): Promise<import("./entities/admin.entity").Admin>;
}
