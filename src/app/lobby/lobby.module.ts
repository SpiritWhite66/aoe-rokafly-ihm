import { BalanceService } from './balance.service';
import { LobbyService } from './lobby.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { LobbyComponent } from './lobby.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, BrowserAnimationsModule,  NgxSpinnerModule, FormsModule],
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
  providers: [LobbyService, BalanceService]
})

export class LobbyModule {}
