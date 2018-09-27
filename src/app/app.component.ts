import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MiamMiam';
  public noConexion: boolean=true;

  public toggleConnexion(): void{
    this.noConexion = !this.noConexion;
    console.log("pouet")
  }
}
