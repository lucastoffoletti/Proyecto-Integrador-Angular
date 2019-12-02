import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-estructura',
  templateUrl: './estructura.component.html',
  styleUrls: ['./estructura.component.css']
})
export class EstructuraComponent implements OnInit {

  mostrar : boolean = true
  //usuarios : Array<string> = [
  usuarios : string[] = [
    'Lucas',
    'Diego',
    'Ana',
    'Paula'
  ]

  alumnos = [
    {nombre: 'Juan', apellido: 'Gomez', edad:19, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/7_avatar-256.png'},
    {nombre: 'Marcelo', apellido: 'Mei', edad:21, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-256.png'},
    {nombre: 'Pablo', apellido: 'Lopez', edad:26, curso: false, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-256.png'},
    {nombre: 'Maria', apellido: 'Gonzalez', edad:31, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/9_avatar-256.png'}
  ]

  clientes : string[] = []

  constructor(public clientesService : ClientesService) {
    this.clientes = this.clientesService.clientes
  }

  borrarCliente() {
    this.clientesService.popCliente()
  }


  ngOnInit() {
  }

  borrarAlumno(index) {
    this.alumnos.splice(index,1)
  }

  agregarAlumno() {
    let alumno = {nombre: 'Cecilia', apellido: 'Picos', edad:26, curso: true, foto:'https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/4_avatar-512.png'}

    this.alumnos.push(alumno)
  }


}
