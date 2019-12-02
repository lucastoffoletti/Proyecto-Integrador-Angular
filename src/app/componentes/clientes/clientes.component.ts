import { Component, OnInit } from '@angular/core';
import { ClientesService } from 'src/app/servicios/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes : string[] = []
  client : string = ''

  constructor(private clientesService : ClientesService ) { }

  ngOnInit() {
    this.clientes = this.clientesService.clientes
  }


  agregarCliente(client) {
    this.clientesService.pushCliente(client)
  }


}
