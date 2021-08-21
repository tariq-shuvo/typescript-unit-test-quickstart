import { UserType } from './../models/constants/UserTypes';
import { UserModel } from './../models/UserModel';
export class User {
    //users storage variable
    private users: UserModel[] = []

    /**
     * createUser
     */
    public createUser():UserModel {
        let userInfo:UserModel = {
            userID: "12345678",
            firstName: "Test",
            lastName: "Test",
            email: "Test@gmail.com",
            userType: UserType.STUDENT
        }

        this.users.push(userInfo)

        return userInfo
    }

    /**
     * getAllUser
     */
    public getAllUser():UserModel[] {
        return this.users
    }

    /**
     * getSingleUser
     */
    public getSingleUser(email: string):UserModel {
        const userInfo = this.users.find(user => user.email === email)
        return userInfo!       
    }
}