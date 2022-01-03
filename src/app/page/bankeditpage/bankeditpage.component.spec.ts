import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankeditpageComponent } from './bankeditpage.component';

describe('BankeditpageComponent', () => {
  let component: BankeditpageComponent;
  let fixture: ComponentFixture<BankeditpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankeditpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankeditpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
