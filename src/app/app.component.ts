import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


 //Validacion
 PatternDecimal = '/^d+.d{0,5}$/'; /// acepta 8 decimales
 PatternSpacios = '/^(s+S+s*)*(?!s).*$/';
 PatternEmail='/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
 private regex: RegExp = new RegExp(/^[1-9]\d*$|^\.\d+$|^0\.\d*$|^[1-9]\d*\.\d*$/g);


 form: any;


 ngOnInit() {

  this.form = new FormGroup({
    monto: new FormControl(0.1, [
      Validators.required,
      Validators.pattern('/^\d+(\.\d)?\d*$/'),
    ]),
    vacio: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.maxLength(100),
      Validators.pattern('^(?!\s)'),

    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.pattern(''),
    ]),
  });

  // return this.form.controls;
}

get f(): { [key: string]: AbstractControl } {
  return this.form.controls;
}

guardar(): void {
  let Denominacion = this.form.value;
  console.log('validacin', this.form.value);

  
  //console.log(/^\d+(\.\d)?\d*$/.test(this.form.value.monto)); // false
  console.log(/^(?!\s)/.test(this.form.value.vacio)); // false
  //console.log(/^\d+(\.\d)?\d*$/.test(this.form.value.monto)); // false

 
}




}
