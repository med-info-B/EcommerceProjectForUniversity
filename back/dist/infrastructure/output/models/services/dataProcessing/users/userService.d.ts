import { ICheckRandonNumber, ILoginCredential, IUser, IUserService, IProfile, IAddress } from "../../../interfaces/users/IUserService";
import { JwtService } from '@nestjs/jwt';
import { UserAccessMongoDB } from "../../accessDB/users/userAccessDB";
import { EmailService } from "../../../../web-services-externe/serviceMail/serviceSendGrid";
import { ObjectId } from "mongodb";
export declare class UserService implements IUserService {
    private readonly db;
    private serviceMail;
    private jwtService;
    constructor(db: UserAccessMongoDB, serviceMail: EmailService, jwtService: JwtService);
    findAllUser(): Promise<void | [IUser]>;
    getAddressOfClient(_id: ObjectId): Promise<IAddress>;
    updateAddress(_id: ObjectId, address: IAddress): Promise<IAddress>;
    updateProfile(user: IProfile): Promise<IProfile>;
    private checkIfEmailExist;
    private encryptPassWord;
    changePassWord(user: ILoginCredential): Promise<void>;
    checkCode(req: ICheckRandonNumber): Promise<any>;
    private generateRandomNumber;
    requestForgotPassWord(Iemail: string): Promise<void>;
    login(login: ILoginCredential): Promise<any>;
    findOneUserFilteredBy(Iemail: string): Promise<IUser>;
    subscribbe(user: IUser): Promise<void>;
}
