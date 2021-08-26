import { expect } from 'chai';
import { Validation } from '../utils/Validation';


describe('email_validation', () => {
    let validation = new Validation()
    it('should be checked validation of valid email string true', ()=>{
        expect(validation.checkEmailAddress('hello@gmail.com')).to.equal(true)
    })

    it('should be checked validation of invalid emails string false', ()=>{
        expect(validation.checkEmailAddress('hellogmail.com')).to.equal(false)
        expect(validation.checkEmailAddress('hello@gmailcom')).to.equal(false)
    })
})