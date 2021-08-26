import { expect } from 'chai';
import { Validation } from '../utils/Validation';


describe('email validation check', () => {
    let validation = new Validation()
    it('should be checked validation of valid email string true', ()=>{
        expect(validation.checkEmailAddress('test@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('lastname@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('test.email.with+symbol@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('id-with-dash@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('"abc.test email"@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('"xyz.test.@.test.com"@domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('"abc.(),:;<>[]\".EMAIL.\"email@\ \"email\".test"@strange.domain.com')).to.equal(true)
        expect(validation.checkEmailAddress('example-abc@abc-domain.com')).to.equal(true)
        expect(validation.checkEmailAddress(`#!$%&'*+-/=?^_{}|~@domain.org`)).to.equal(true)
    })

    it('should be checked validation of invalid emails string false', ()=>{
        expect(validation.checkEmailAddress('example.com')).to.equal(false)
        expect(validation.checkEmailAddress('A@b@c@domain.com')).to.equal(false)
        expect(validation.checkEmailAddress('a”b(c)d,e:f;gi[j\k]l@domain.com')).to.equal(false)
        expect(validation.checkEmailAddress('.test@domain.com')).to.equal(false)
        expect(validation.checkEmailAddress('test@domain..com')).to.equal(false)
    })
})