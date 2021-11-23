import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanetasComponent } from './canetas.component';

describe('CanetasComponent', () => {
  let component: CanetasComponent;
  let fixture: ComponentFixture<CanetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
