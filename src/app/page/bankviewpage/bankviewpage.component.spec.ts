import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankviewpageComponent } from './bankviewpage.component';

describe('BankviewpageComponent', () => {
  let component: BankviewpageComponent;
  let fixture: ComponentFixture<BankviewpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankviewpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankviewpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
