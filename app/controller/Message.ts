import { UserType } from '../models/constants/UserTypes';
import ManageDOM from '../utils/ManageDOM';
import { MessageModel } from './../models/MessageModel';
import { User } from './User';

//messages storage variable
let messages: MessageModel[] = []
let userCheckObj = new User()

export class Message {
    /**
     * sendMessage
     */
    public sendMessage(messageInfo: any ):MessageModel {
        const fromUserInfo = userCheckObj.getSingleUserData(messageInfo.from)
        const toUserInfo = userCheckObj.getSingleUserData(messageInfo.to)
        if(fromUserInfo && toUserInfo){
            if(fromUserInfo.userType === UserType.TEACHER){
                messageInfo.fromUser = fromUserInfo
                messageInfo.toUser = toUserInfo
                messages.push(messageInfo)
            }else{
                if(toUserInfo.userType === UserType.TEACHER){
                    messageInfo.fromUser = fromUserInfo
                    messageInfo.toUser = toUserInfo
                    messages.push(messageInfo)
                }else{
                    new ManageDOM().insertNewElementPrependById("sendMessage", `<label class="error-color text-center">student or parent can't sent message between them</label>`)
                }
            }   
        }else{
            new ManageDOM().insertNewElementPrependById("sendMessage", `<label class="error-color text-center">Your input to email and from email invalid</label>`)
        }
        let messageData:any = messageInfo

        return messageData
    }

    /**
     * getAllUser
     */
    public getAllMessage(): void {
        let messageList = ``
        messages.map(message=>{
            messageList += `<li>
            <h4>${message.fromUser.email} => ${message.toUser.email}</h4>
            <p>From: ${message.fromUser.firstName+' '+message.fromUser.lastName}</p>
            <p>Name: ${message.toUser.firstName+' '+message.toUser.lastName}</p>
            <p>Email: ${message.message}</p>
            </li>`
        })

        new ManageDOM().insertNewElementById('item-list-message', messageList)
    }
}