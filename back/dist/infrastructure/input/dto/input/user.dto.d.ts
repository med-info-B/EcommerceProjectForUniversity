import { Role } from '../../../output/models/interfaces/users/IUserService';
declare class UserDTO {
    email: string;
    password: string;
}
export declare class CreateAdminDTO {
    name: string;
    email: string;
    role: Role;
    password: string;
}
export declare class CreateUserDto {
    name: string;
    email: string;
    password: string;
}
export declare class DemandChangePasswodByEmailDTO {
    email: string;
}
export declare class checkRandomNumberDTO {
    Iemail: string;
    IrandomeNumber: number;
}
export declare class LoginCredentialDTO extends UserDTO {
}
export declare class ChangePassWordDTO extends UserDTO {
}
export declare class UpdateProfileDTO {
    name: string;
    email: string;
    password?: string;
}
export declare class UpdateAddressDTO {
    pays: string;
    toClientDestination: string;
    addressPostal: string;
    ville: string;
    codePostal: number;
    numTel: number;
}
export {};
