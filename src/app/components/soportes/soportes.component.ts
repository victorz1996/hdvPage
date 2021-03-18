import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soportes',
  templateUrl: './soportes.component.html',
  styleUrls: ['./soportes.component.css']
})
export class SoportesComponent implements OnInit {
  @Input() soporteUrl: string
  pdfSource: string = ''

  constructor() {
   }

  ngOnInit(): void {
  }

}
