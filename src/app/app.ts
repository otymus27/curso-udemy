import { Component } from '@angular/core';
import { HelloWorldComponent } from './helloworld/helloworld.compont';
import { Minhapagina } from './minhapagina/minhapagina';

@Component({
  selector: 'app-root',
  imports: [HelloWorldComponent, Minhapagina],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'conceitos-basicos';
}
