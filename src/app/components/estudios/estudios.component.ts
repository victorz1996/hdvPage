import { Component } from '@angular/core';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css'],
})
export class EstudiosComponent {
  faEye = faEye;
  public estudios: Object[] = [
    {
      id: 'One',
      nombre: 'Secundaria',
      titulo: 'Titulo bachiller tecnico',
      escuela: 'INEM',
      ciudad: 'Neiva',
      departamento: 'Huila',
      anioInicio: 2007,
      anioFin: 2013,
      soporteUrl: '/assets/soportes/bachiller.pdf',
      soporteTitle: 'Diploma bachiller',
    },
    {
      id: 'Two',
      nombre: 'Tecnico aux. contable',
      titulo: 'Titulo tecnico auxiliar contable',
      escuela: 'SENA',
      ciudad: 'Neiva',
      departamento: 'Huila',
      anioInicio: 2012,
      anioFin: 2013,
      soporteUrl: '/assets/soportes/tecnicoSena.pdf',
      soporteTitle: 'Acta grado tenico SENA',
    },
    {
      id: 'Three',
      nombre: 'Ingenieria de software',
      titulo: 'Titulo ingeniero de software',
      escuela: 'Universidad surcolombiana',
      ciudad: 'Neiva',
      departamento: 'Huila',
      anioInicio: 2014,
      anioFin: 2021,
      soporteUrl: '/assets/soportes/ingenieria.pdf',
      soporteTitle: 'Carton de grado',
    },
  ];

  constructor(private modalService: NgbModal) {}

  open(content: any) {
    this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      scrollable: true,
      size: 'lg',
    });
  }
}
