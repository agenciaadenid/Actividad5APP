import { Component } from '@angular/core';
import { Blogcomponente } from './components/blogcomponente/blogcomponente';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Blogcomponente],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App { }