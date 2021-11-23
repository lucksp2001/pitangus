import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturaNacionalComponent } from './literatura-nacional.component';

describe('LiteraturaNacionalComponent', () => {
  let component: LiteraturaNacionalComponent;
  let fixture: ComponentFixture<LiteraturaNacionalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraturaNacionalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraturaNacionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
