import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalanceSearchMatchComponent } from './balance-search-match.component';

describe('BalanceSearchMatchComponent', () => {
  let component: BalanceSearchMatchComponent;
  let fixture: ComponentFixture<BalanceSearchMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalanceSearchMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalanceSearchMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
