 import {IsEmail , Min} from "class-validator";

 export class LoginDto {
    @IsEmail()
    email : string

    @Min(8)
    password : string


 }