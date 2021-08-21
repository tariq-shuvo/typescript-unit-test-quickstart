import ManageDOM from '../utils/ManageDOM';
import { UserModel } from './../models/UserModel';

//users storage variable
let users: UserModel[] = []

export class User {
    /**
     * createUser
     */
    public createUser(userInfoData: any ):UserModel {
        let userInfo:any = userInfoData

        users.push(userInfo)

        return userInfo
    }

    /**
     * getAllUser
     */
    public getAllUser(): void {
        console.log(users)
        let userList = ``
        users.map(user=>{
            userList += `<li>
            <h4>${user.userType}(${user.userID})</h4>
            <p>Name: ${user.userType.toLowerCase()!='student'?user.salutation:''}${user.firstName+' '+user.lastName}</p>
            <p>Email: ${user.email}</p>
            </li>`
        })

        new ManageDOM().insertNewElementById('item-list', userList)
    }

    /**
     * getSingleUserData
     */
     public getSingleUserData(email: string):any {
        const userInfo = users.find(user => user.email === email)
        return userInfo       
    }

    /**
     * checkUserDuplicateEmail
     */
    public checkUserDuplicateEmail(email: string):boolean {
        const userInfo = users.find(user => user.email === email)
        return userInfo ? true : false       
    }

    /**
     * checkUserDuplicateID
     */
    public checkUserDuplicateID(id: string):boolean {
        const userInfo = users.find(user => user.userID === id)
        return userInfo ? true : false
    }

    /**
     * getFullName
     */
    public getFullName(id: string) {
        const userInfo = users.find(user => user.userID === id)
        return userInfo?userInfo.salutation + userInfo.firstName + userInfo.lastName : 'invalid user id'
    }
}