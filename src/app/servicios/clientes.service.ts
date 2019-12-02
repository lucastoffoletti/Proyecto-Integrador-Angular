import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  clientes : string[] = [
    'Pedro',
    'Juan',
    'Ana',
    'Lucia'
  ]

  pushCliente(client) {
    this.clientes.push(client)
  }

  popCliente() {
    this.clientes.pop()
  }

  constructor() { }
}
