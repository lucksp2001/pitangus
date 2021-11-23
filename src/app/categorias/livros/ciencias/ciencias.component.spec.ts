import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CienciasComponent } from './ciencias.component';

describe('CienciasComponent', () => {
  let component: CienciasComponent;
  let fixture: ComponentFixture<CienciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CienciasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CienciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
