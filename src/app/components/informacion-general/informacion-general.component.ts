import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-general',
  templateUrl: './informacion-general.component.html',
  styleUrls: ['./informacion-general.component.css']
})
export class InformacionGeneralComponent implements OnInit {

  persona: Object = {
    nombres: 'Victor Manuel',
    apellidos: 'Zabala Garcia',
    edad: 24,
    estadoCivil: 'Soltero',
    ciudadReside: 'Neiva',
    departamentoReside: 'Huila',
    direccion: 'Cll. 66B # 2W - 19',
    telefono: '3194486137',
    email: 'victorma164@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
