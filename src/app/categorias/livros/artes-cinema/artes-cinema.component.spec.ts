import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtesCinemaComponent } from './artes-cinema.component';

describe('ArtesCinemaComponent', () => {
  let component: ArtesCinemaComponent;
  let fixture: ComponentFixture<ArtesCinemaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtesCinemaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtesCinemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
