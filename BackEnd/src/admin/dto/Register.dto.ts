import {IsEmail , Min} from "class-validator";

export class RegisterDto {

    name : string


   @IsEmail()
   email : string

   @Min(8)
   password : string


}