import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  jugador_activo = "O";
  matriz:string[] = ["-","-","-","-","-","-","-","-","-"];
  img = "http://www.iconsplace.com/icons/preview/red/minus-2-256.png";
  simbolo:string[] = [this.img, this.img, this.img, this.img, this.img, this.img, this.img, this.img, this.img];
  ganador:boolean = false;
  cont = 0;
  msg:string = "";

  /* Matriz
      0 | 1 | 2
     ___|___|___
      3 | 4 | 5 
     ___|___|___
      6 | 7 | 8
        |   | 
  */

  onClick(pos){
    if(this.matriz[pos] == "-" && this.ganador == false){
      //Se establece el simbolo en la posicion correspondiente (O | X)
      this.matriz[pos] = this.jugador_activo;

      //Cambio del jugador activo y de la imagen
      if(this.jugador_activo == "O"){
        this.jugador_activo = "X";
        this.simbolo[pos] = "http://jimdscott.com/static/css/images/tic-tac-toe-O.png";
      }
      else if(this.jugador_activo == "X"){
        this.jugador_activo = "O";
        this.simbolo[pos] = "http://jimdscott.com/static/css/images/tic-tac-toe-X.png";
      }

      this.ganador = this.checkGanador(pos, this.matriz[pos]);
      this.cont++;

      //Si cont == 9 y no hay ganador, el juego termino en empate
      if(this.cont == 9 && this.ganador == false){
        this.msg = "El juego ha terminado en empate";
      }     
    }
  }

  checkGanador(pos, simbolo_ganador){
    if((this.matriz[0] != "-" && this.matriz[0] == this.matriz[1] && this.matriz[0] == this.matriz[2]) || 
      (this.matriz[3] != "-" && this.matriz[3] == this.matriz[4] && this.matriz[3] == this.matriz[5]) ||
      (this.matriz[6] != "-" && this.matriz[6] == this.matriz[7] && this.matriz[6] == this.matriz[8]) ||
      (this.matriz[0] != "-" && this.matriz[0] == this.matriz[3] && this.matriz[0] == this.matriz[6]) ||
      (this.matriz[1] != "-" && this.matriz[1] == this.matriz[4] && this.matriz[1] == this.matriz[7]) ||
      (this.matriz[2] != "-" && this.matriz[2] == this.matriz[5] && this.matriz[2] == this.matriz[8]) ||
      (this.matriz[0] != "-" && this.matriz[0] == this.matriz[4] && this.matriz[0] == this.matriz[8]) ||
      (this.matriz[2] != "-" && this.matriz[2] == this.matriz[4] && this.matriz[2] == this.matriz[6])){

        this.msg = "El ganador es el jugador: " + simbolo_ganador;
        return true;
    }
    return false;
  }

  reiniciarJuego(){
    this.jugador_activo = "O";
    this.matriz = ["-","-","-","-","-","-","-","-","-"];
    this.simbolo = [this.img, this.img, this.img, this.img, this.img, this.img, this.img, this.img, this.img];
    this.ganador = false;
    this.cont = 0;
    this.msg = "";
  }
}
