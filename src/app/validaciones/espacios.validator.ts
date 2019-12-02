import { AbstractControl } from '@angular/forms';

export function VerificarEspacios(c: AbstractControl){
    //https://regex101.com/
    let regExp = /^[A-Z][a-z]+$/
    
    if(c.value == null) return null
    
    //if(c.value.indexOf(' ') >= 0) {
    if(!regExp.test(c.value)) {
        return { conEspacios : true }
    }
    return null
}