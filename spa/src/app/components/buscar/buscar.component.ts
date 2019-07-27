import { Component, OnInit } from '@angular/core';
import { HerosService, Hero } from 'src/app/Services/heros.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  heros: any[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private _herosService: HerosService) {

  this.activatedRoute.params.subscribe(params =>{
  this.heros =_herosService.buscarHeroes(params['termino']);
  console.log(params['termino']);

});
              }

  ngOnInit() {

  }

}
