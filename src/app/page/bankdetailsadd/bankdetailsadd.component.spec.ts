import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankdetailsaddComponent } from './bankdetailsadd.component';

describe('BankdetailsaddComponent', () => {
  let component: BankdetailsaddComponent;
  let fixture: ComponentFixture<BankdetailsaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankdetailsaddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankdetailsaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
