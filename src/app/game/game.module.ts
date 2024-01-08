import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameRoutingModule } from './game-routing.module';
import { MaterialModule } from '../material/material.module';

import { GameComponent } from './pages/game/game.component';
import { GameoverComponent } from './pages/gameover/gameover.component';
import { PokemonViewComponent } from './components/pokemon-view/pokemon-view.component';
import { IniciarSessioComponent } from './pages/iniciar-sessio/iniciar-sessio.component';



@NgModule({
  declarations: [
    GameComponent,
    GameoverComponent,
    PokemonViewComponent,
    IniciarSessioComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    MaterialModule
  ]
})
export class GameModule { }
