import { HerosService } from './../../Services/heros.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heros:any[];

  constructor(private _herosService: HerosService,
    private _router: Router) { }

  ngOnInit() {
    this.heros = this._herosService.getHeros();
  }

  ver(id: number){
    this._router.navigate( ['/hero', id] );
  }

}
