import { UserType } from './constants/UserTypes';

export interface UserModel {
    userID: string,
    firstName: string,
    lastName: string,
    email: string,
    profilePhoto?: string,
    userType: UserType
}