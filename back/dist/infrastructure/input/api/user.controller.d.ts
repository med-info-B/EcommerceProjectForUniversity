import { IUserService } from '../../output/models/interfaces/users/IUserService';
import { CreateUserDto, LoginCredentialDTO, checkRandomNumberDTO, ChangePassWordDTO, UpdateProfileDTO, UpdateAddressDTO, DemandChangePasswodByEmailDTO, CreateAdminDTO } from '../dto/input/user.dto';
import { UpdatedProfileDTO } from '../dto/output/user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: IUserService);
    createUser(userCreateDtp: CreateUserDto): Promise<void>;
    login(credential: LoginCredentialDTO): Promise<any>;
    makeRequestForgetPassWord(request: DemandChangePasswodByEmailDTO): Promise<any>;
    checkCodeSentByEmail(req: checkRandomNumberDTO): Promise<any>;
    changePassWord(req: ChangePassWordDTO): Promise<void>;
    updateProfile(profile: UpdateProfileDTO): Promise<UpdatedProfileDTO>;
    updateAddress(id: any, address: UpdateAddressDTO): Promise<import("../../output/models/interfaces/users/IUserService").IAddress>;
    getAddress(id: any): Promise<import("../../output/models/interfaces/users/IUserService").IAddress>;
    createAdmin(adminCreateDtp: CreateAdminDTO): Promise<void>;
    getAllUser(): Promise<void | [import("../../output/models/interfaces/users/IUserService").IUser]>;
}
