// estado de abertura
// opcoes do menu
// comportamento de abrir
// comportamento de fechar

import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {
  loadSite: boolean;
  opened: boolean = false;
  options: any[] = [
    {
      icon: 'fa fa-home',
      text: 'Home',
      route: '/'
    },
    {
      icon: 'fa fa-gamepad',
      text: 'Produtos',
      route: '/products'
    }
  ]

  constructor() {
  }

  open() {
    this.loadSite = true;
    this.opened = true;
  }

  close() {
    this.opened = false;
  }

}
