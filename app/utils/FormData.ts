import ManageDOM from './ManageDOM'

export const formData = (form: HTMLFormElement) => {
    const inputs = form.querySelectorAll('input')
    const selects = form.querySelectorAll('select')

    let formValidation = new ManageDOM()

    let values:{[prop: string]: string} ={};

    let errortFlag: boolean = false 

    inputs.forEach(input=>{
        values[input.name] = input.value
        if(input.value==''){
            formValidation.insertNewElementAppendById(input.id, `<label class="error-color">${input.dataset.title } empty field is not allowed</label>`)
            values[input.name] = input.dataset.title + 'empty field is not allowed'
            errortFlag = true
        }
    })

    selects.forEach(select=>{
        values[select.name] = select.options[select.selectedIndex].value
        if(select.options[select.selectedIndex].value==''){
            formValidation.insertNewElementAppendById(select.id, `<label class="error-color">${select.dataset.title } empty field is not allowed</label>`)
            values[select.name] = select.dataset.title + 'empty field is not allowed'
            errortFlag = true
        }
    })

    return { error: errortFlag, values };
}