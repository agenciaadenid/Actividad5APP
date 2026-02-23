import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Noticia {
  titulo: string;
  imagen: string;
  texto: string; 
  fecha: string; 
  autor: string;
}

@Component({
  selector: 'app-blogcomponente',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './blogcomponente.html',
  styleUrl: './blogcomponente.css',
})
export class Blogcomponente {
  noticias: Noticia[] = [
  {
    titulo: 'Therian: identidad y comunidad',
    imagen: 'https://www.hola.com/horizon/landscape/1176fdb55cff-gettyimages-2185542360.jpg',
    texto: 'Qué significa ser therian, por qué surge el término y cómo se vive en comunidades online.',
    fecha: '2026-02-23',
    autor: 'Suso Trillo',
  },
  {
    titulo: 'Oriol Cardona brilla en JJOO',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLE0PAuuzH2wBUAzi8LAYK64g_mIs2LBrvjg&s',
    texto: 'Gran actuación y regularidad en pruebas de invierno: claves de su rendimiento y expectativas.',
    fecha: '2026-02-23',
    autor: 'Suso Trillo',
  }
];
  nuevaNoticia: Noticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
    autor: '',
  };
}
