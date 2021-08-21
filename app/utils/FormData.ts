import { User } from './../controller/User';
import ManageDOM from './ManageDOM'

export const formData = (form: Element) => {
    const inputs = form.querySelectorAll('input')
    const textareas = form.querySelectorAll('textarea')
    const selects = form.querySelectorAll('select')
    const errorNodes  = document.querySelectorAll('.error-color');

    errorNodes.forEach(errorNode => {
        errorNode.remove()
    });


    let formValidation = new ManageDOM()

    let values:{[prop: string]: string} ={};

    let errortFlag: boolean = false 

    inputs.forEach(input=>{
        values[input.name] = input.value.toLowerCase()

        if(input.value=='' && input.dataset.required=='true'){
            formValidation.insertNewElementAppendById(input.id, `<label class="error-color">${input.dataset.title } empty field is not allowed</label>`)
            values[input.name] = input.dataset.title + 'empty field is not allowed'
            errortFlag = true
        }

        if(input.name=='userID'){
           const checkUserDuplicateID = new User().checkUserDuplicateID(input.value.toLowerCase())
           if(checkUserDuplicateID){
                formValidation.insertNewElementAppendById(input.id, `<label class="error-color">${input.dataset.title } duplicate is not allowed</label>`)
                values[input.name] = input.dataset.title + 'empty field is not allowed'
                errortFlag = true
           }
        }
    })

    textareas.forEach(textarea=>{
        values[textarea.name] = textarea.value.toLowerCase()

        if(textarea.value=='' && textarea.dataset.required=='true'){
            formValidation.insertNewElementAppendById(textarea.id, `<label class="error-color">${textarea.dataset.title } empty field is not allowed</label>`)
            values[textarea.name] = textarea.dataset.title + 'empty field is not allowed'
            errortFlag = true
        }
    })

    selects.forEach(select=>{
        values[select.name] = select.options[select.selectedIndex].value
        if(select.options[select.selectedIndex].value=='' && select.dataset.required=='true'){
            formValidation.insertNewElementAppendById(select.id, `<label class="error-color">${select.dataset.title } empty field is not allowed</label>`)
            values[select.name] = select.dataset.title + 'empty field is not allowed'
            errortFlag = true
        }
    })

    return { error: errortFlag, values };
}