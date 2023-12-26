import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GifService } from '../../services/gif.service';
import { Datum } from '../../interfaces/gif.interface';


@Component({
  selector: 'app-buscar-gif',
  templateUrl: './buscar-gif.component.html',
  styleUrl: './buscar-gif.component.css',
})
export class BuscarGifComponent {
  formularioBusqueda: FormGroup = this.fb.group({
    busqueda: ['', Validators.required],
  });
  listaGifs: Datum[] | any = [];

  constructor(private fb: FormBuilder, private gifService:GifService) {}

  onSearch(){
    if(this.formularioBusqueda.invalid) return

    const valor = this.formularioBusqueda.controls['busqueda'].value;
    this.gifService.getGifs(valor).subscribe(
      {
        next: (gifs)=>{
          if(Array.isArray(gifs)){
            this.listaGifs = [... gifs, ... this.listaGifs]
          }else{
            this.listaGifs = [...gifs.data, ...this.listaGifs]
          }
          this.gifService.gifEmitter.emit(this.listaGifs);
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }
}
