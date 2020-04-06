import { LobbyService } from './lobby.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LobbyComponent } from './lobby.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LobbyComponent],
  exports: [LobbyComponent],
  providers: [LobbyService]
})

export class LobbyModule {}
