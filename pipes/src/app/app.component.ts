import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  nombre = 'Yougansi';
  pi = 3.141643543636361;
  a = 0.234;
  salario = 1234.5;
  nombre2 = 'Guayo Salmoni Tu Puta MAdrE';

  video = 'A60CfwMy74Y';

  bool = true;

  cambiaBool() {
    this.bool = !this.bool;
  }
}
