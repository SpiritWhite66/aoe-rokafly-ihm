import { LobbyService } from './lobby.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LobbyComponent } from './lobby.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule,  NgxSpinnerModule],
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
  providers: [LobbyService]
})

export class LobbyModule {}
