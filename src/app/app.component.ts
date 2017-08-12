import { Component } from '@angular/core';

import { MenuService } from './providers/menu.service'
import {StorageService} from './providers/storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  constructor(public menu: MenuService, public storageService: StorageService) { 
    storageService.setDrive("local");
  }

}
