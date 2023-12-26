import { GifRoutingModule } from './gif-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BuscarGifComponent } from './components/buscar-gif/buscar-gif.component';
import { ListarGifComponent } from './components/listar-gif/listar-gif.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        HttpClientModule, 
        ReactiveFormsModule,
        CommonModule
    ],
    declarations: [
        BuscarGifComponent,
        ListarGifComponent,
        HomePageComponent,
    ],
    exports: [GifRoutingModule],
})
export class GifModule { }
