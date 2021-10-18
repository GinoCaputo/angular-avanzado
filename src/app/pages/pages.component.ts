import { Component, OnInit } from '@angular/core';
import { ComponentsModule } from '../components/components.module';
import { SettingsService } from '../services/settings.service';
declare function customInitFunction(): any;
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [],
})
export class PagesComponent implements OnInit {
  constructor(private settingService: SettingsService) {}

  ngOnInit(): void {
    customInitFunction();

    //   const promesa = new Promise((resolve) => {
    //     if (false) {
    //       resolve('Hola mundo');
    //     } else {
    //       reject('algo salio mal');
    //     }
    //   });
    //   promesa
    //     .then((msj) => {
    //       console.log(msj);
    //     })
    //     .catch((error) => console.log('error en mi promise', error));
    //   console.log(' fin del init');
  }
  getUsuarios() {}
}
