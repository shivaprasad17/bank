import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsformComponent } from './bankdetailsform.component';

describe('BankdetailsformComponent', () => {
  let component: BankdetailsformComponent;
  let fixture: ComponentFixture<BankdetailsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
