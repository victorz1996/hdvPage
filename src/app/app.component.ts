import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  active = 1;
  descripcion: string =
    'Estudiante de Ingeniería de software en proceso de grado y técnico en auxiliar contable, con conocimientos en diseño y gestión de sistemas de información y bases de datos. Manejo distintos lenguajes de programación y frameworks como Spring boot - java, python, Angular y Vue - javascript, php, entre otros. Tengo conocimientos en nominas e inventarios y experiencia en atención al cliente. Me caracterizo por ser responsable, puntual, tolerante y muy dedicado a mis labores. Soy pro-activo y siempre estoy dispuesto a colaborar en lo que se necesite';
  tabs: Object[] = [
    { id: 1, titulo: 'Informacion general' },
    { id: 2, titulo: 'Estudios' },
    { id: 3, titulo: 'Experiencia' },
  ];
}
