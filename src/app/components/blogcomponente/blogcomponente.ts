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

  publicar() {

  if (
    !this.nuevaNoticia.titulo?.trim() ||
    !this.nuevaNoticia.autor?.trim() ||
    !this.nuevaNoticia.fecha?.trim() ||
    !this.nuevaNoticia.texto?.trim() ||
    !this.nuevaNoticia.imagen?.trim()
  ) {
    alert('Todos los campos son obligatorios');
    return;
  }

  const noticiaInsertar: Noticia = {
    ...this.nuevaNoticia,
    titulo: this.nuevaNoticia.titulo.trim(),
    autor: this.nuevaNoticia.autor.trim(),
    texto: this.nuevaNoticia.texto.trim(),
    imagen: this.nuevaNoticia.imagen.trim(),
  };

  this.noticias.push(noticiaInsertar);

  this.nuevaNoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
    autor: ''
  };
}

limpiar() {
  this.nuevaNoticia = {
    titulo: '',
    imagen: '',
    texto: '',
    fecha: '',
    autor: ''
  };
}
  
}
