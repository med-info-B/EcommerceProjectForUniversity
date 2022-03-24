import { IUserAccessDB } from '../../../interfaces/users/IUserAccessDB';
import { Model } from 'mongoose';
import { IUser, IProfile, IAddress } from "../../../interfaces/users/IUserService";
import { User } from '../../../schema/user.schema';
import { ObjectId } from "mongodb";
export declare class UserAccessMongoDB implements IUserAccessDB {
    private readonly userModel;
    constructor(userModel: Model<User>);
    getAllUSer(): Promise<void | [IUser]>;
    getOneUserFiltredByID(_id: ObjectId): Promise<void | Object>;
    updateAddress(_id: ObjectId, ad: IAddress): Promise<void | IAddress>;
    updateProfile(profile: IProfile): Promise<IProfile | void>;
    updatePassWord(email: string, pwd: String, salt: string): Promise<void>;
    getOneUserFiltredBy(email: string): Promise<Object | void>;
    push(user: IUser): Promise<void>;
    existUserFiltredBy(email: String): Promise<Boolean | void>;
    setRandomNumber(email: string, nbr: number): Promise<void>;
    removeKeyRandomNumber(email: string): Promise<void>;
}
