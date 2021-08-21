import { User } from './controller/User';
import { formData } from './utils/FormData';
import ManageDOM from './utils/ManageDOM';

const form = document.querySelector('form')!
const userTypeSelect = document.querySelector('select')!
const userButton = document.querySelector('#manage-user-button')!
const messagingButton = document.querySelector('#manage-messaging-button')!

const userObj = new User()

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    const data = formData(form)
    if(!data.error){
        userObj.createUser(data.values)
        userObj.getAllUser()
    }
})

//Clicked manage user button
userButton.addEventListener('click', (e)=>{
    e.preventDefault()
    new ManageDOM().classAddToElement('manage-messaging', 'invisible')
    new ManageDOM().classRemoveFromElement('manage-user', 'invisible')
    new ManageDOM().classAddToElement('manage-user', 'visible')
})

//Clicked messaging button
messagingButton.addEventListener('click', (e)=>{
    e.preventDefault()
    new ManageDOM().classAddToElement('manage-user', 'invisible')
    new ManageDOM().classRemoveFromElement('manage-messaging', 'invisible')
    new ManageDOM().classAddToElement('manage-messaging', 'visible')
})

//Change User Type For Salutation
userTypeSelect.addEventListener('change', (e)=>{
    e.preventDefault()
    if(userTypeSelect.options[userTypeSelect.selectedIndex].value.toLowerCase() != 'student'){
        new ManageDOM().classRemoveFromElement('salutationField', 'invisible')
        new ManageDOM().classAddToElement('salutationField', 'visible')
    }else{
        new ManageDOM().classRemoveFromElement('salutationField', 'visible')
        new ManageDOM().classAddToElement('salutationField', 'invisible')
    }
})