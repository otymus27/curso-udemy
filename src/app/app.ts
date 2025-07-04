import { Component } from '@angular/core';
import { helloWorld } from './components/primeiro-componente/primeiro-componente';
import { Calculadora } from "./components/calculadora/calculadora";

@Component({
  selector: 'app-root',
  imports: [helloWorld, Calculadora],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'conceitos-basicos';
}
