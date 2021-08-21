import { UserModel } from './UserModel';
export interface MessageModel {
    from: string,
    fromUser: UserModel,
    to: string,
    toUser: UserModel,
    message: string,
}