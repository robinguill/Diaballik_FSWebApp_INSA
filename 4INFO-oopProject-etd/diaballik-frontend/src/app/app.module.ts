import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { MenuComponent } from './menu/menu.component';
import { MyData } from './mydata';
import { HomeComponent } from './home/home.component';
import { PlayerSelectionComponent } from './player-selection/player-selection.component';
import { PersonalisationComponent } from './personalisation/personalisation.component';
import { GameComponent } from './game/game.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MenuComponent,
    HomeComponent,
    PlayerSelectionComponent,
    PersonalisationComponent,
    GameComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [MyData],
  bootstrap: [AppComponent]
})
export class AppModule { }
