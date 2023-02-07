import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, AbstractControl, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appRepiteCont]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RepitePassDirective,
      multi: true
    }

  ]
})
export class RepitePassDirective implements Validator{
    @Input() parametro!:any; //recoger un valor que viene desde el formulario. (sirve para pasar un campo que no es del propio input contraseña, sino lo usamos desde confirmarcontraseña.)

  constructor() {


   }

  validate(control: AbstractControl):ValidationErrors | null {

    //console.log(control.value) //Valor del campo que tiene la directiva: rcontraseña
    //console.log(this.parametro)//valor que paso desde el campo repite contraseña [pass]
    if (control && control.value!= this.parametro) {
      return{'rcontraseña':true};
    }else{
      return null;
    }

  }

}
