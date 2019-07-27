import { HerosService, Hero } from './../../Services/heros.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  hero:Hero;

  constructor(private activatedRoute: ActivatedRoute,
              private _herosService: HerosService) {

    this.activatedRoute.params.subscribe(param =>
      this.hero =_herosService.getHero(param['id']));
  }



  ngOnInit() {
  }

}
