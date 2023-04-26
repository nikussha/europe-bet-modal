import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashgamesComponent } from './cashgames.component';

describe('CashgamesComponent', () => {
  let component: CashgamesComponent;
  let fixture: ComponentFixture<CashgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
