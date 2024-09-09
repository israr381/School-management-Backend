import { LoginDto } from './dto/Login.dto';
import { JwtService } from "@nestjs/jwt";
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import { RegisterDto } from './dto/Register.dto';
export declare class AdminService {
    private adminRepository;
    private jwtService;
    constructor(adminRepository: Repository<Admin>, jwtService: JwtService);
    register(registerDto: RegisterDto): Promise<{
        message: string;
        result: {
            user: {
                name: string;
                email: string;
                password: any;
            } & Admin;
            access_token: string;
        };
    }>;
    login(loginDto: LoginDto): Promise<{
        Message: string;
        result: {
            user: Admin;
            access_token: string;
        };
    }>;
    logout(): Promise<{
        message: string;
    }>;
    findAll(): Promise<Admin[]>;
    delete(id: string): Promise<{
        message: string;
    }>;
    generateRandomId(): string;
    googleLogin(req: any): Promise<{
        message: string;
        user: {
            id: string;
            name: string;
            email: string;
            photo: string;
        };
        access_token: string;
    }>;
    findById(id: string): Promise<Admin>;
}
