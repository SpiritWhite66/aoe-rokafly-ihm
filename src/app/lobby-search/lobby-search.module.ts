import { LobbyFilterPipe } from './lobby-filter.pipe';
import { LobbySummaryComponent } from './lobby-summary.component';
import { LobbySearchService } from './lobby-search.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LobbySearchComponent } from './lobby-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, BrowserAnimationsModule,  NgxSpinnerModule],
  declarations: [LobbySearchComponent, LobbySummaryComponent, LobbyFilterPipe],
  exports: [LobbySearchComponent],
  providers: [LobbySearchService]
})

export class LobbySearchModule {}
