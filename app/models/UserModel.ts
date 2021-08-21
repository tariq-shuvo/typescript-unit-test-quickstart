import { UserType } from './constants/UserTypes';

export interface UserModel {
    userID: string,
    firstName: string,
    lastName: string,
    salutation?: string,
    email: string,
    profilePhoto?: string,
    userType: UserType
}