import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VerificarEspacios } from 'src/app/validaciones/espacios.validator';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  formu = {
    nombre: '',
    apellido: '',
    edad: '',
    email: '',
    comentarios: ''
  }

  cantidadMaximaNombre : number = 12
  cantidadMinimaNombre : number = 6

  camposNoValidos: boolean = false

  f: FormGroup

  constructor(private fb: FormBuilder) {
    this.f = fb.group({
      nombre: ['', Validators.compose([
        Validators.required,
        Validators.maxLength(this.cantidadMaximaNombre),
        Validators.minLength(this.cantidadMinimaNombre),
        VerificarEspacios
      ])],
      apellido: '',
      edad: '',
      contacto: fb.group({
        email: '',
        telefono: ''
      }),
      comentarios: ''
    })
  }

  ngOnInit() {
  }

  enviar() {
    if (this.formu.nombre != '') {
      console.log(this.formu)
      this.camposNoValidos = false
      this.formu = {
        nombre: '',
        apellido: '',
        edad: '',
        email: '',
        comentarios: ''
      }
    }
    else {
      console.log('Campos no válidos')
      this.camposNoValidos = true
    }

  }


  getCantMinima() {
    return this.f.controls.nombre.errors.minlength.requiredLength
  }

  enviarFReactive() {
    console.log(this.f.value)
  }


}
