import { UserAccessMongoDB } from '../../models/services/accessDB/users/userAccessDB';
export declare class EmailService {
    private readonly db;
    constructor(db: UserAccessMongoDB);
    private resetKeySendGrid;
    send(email: string, name: string, randNumber: number): Promise<void>;
}
