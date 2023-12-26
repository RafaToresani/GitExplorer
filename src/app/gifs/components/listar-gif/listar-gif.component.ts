import { Datum } from './../../interfaces/gif.interface';
import { Component } from '@angular/core';
import { GifService } from '../../services/gif.service';

@Component({
  selector: 'app-listar-gif',
  templateUrl: './listar-gif.component.html',
  styleUrl: './listar-gif.component.css'
})
export class ListarGifComponent {
  listaGifs: Datum[] | any = [];

  constructor(private gifService:GifService){

  }

  ngOnInit():void{
    this.mostrarGifs();
  }

  mostrarGifs(){
    this.gifService.gifEmitter.subscribe((gifs) => {
      this.listaGifs = gifs;
    })
  }
}
