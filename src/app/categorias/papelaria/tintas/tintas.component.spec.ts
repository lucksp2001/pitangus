import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TintasComponent } from './tintas.component';

describe('TintasComponent', () => {
  let component: TintasComponent;
  let fixture: ComponentFixture<TintasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TintasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TintasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
