import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanklistpageComponent } from './banklistpage.component';

describe('BanklistpageComponent', () => {
  let component: BanklistpageComponent;
  let fixture: ComponentFixture<BanklistpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanklistpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanklistpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
