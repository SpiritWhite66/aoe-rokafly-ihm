import { BalanceSearchMatchComponent } from './balance-search-match.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [CommonModule, RouterModule, FormsModule],
  declarations: [BalanceSearchMatchComponent],
  exports: [BalanceSearchMatchComponent],
  providers: []
})
export class BalanceModule { }
