 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar=true;

  frase: any ={
    mensaje: 'Te comiste las verduras YOLO!!!',
    autor: 'Mamolabio'
  };
  constructor() { }

  cambiaMostrar(){
    this.mostrar=!this.mostrar;
  }

  personajes: string[] = ['Mutombo','Mosumano','Albondigolo ']



}
