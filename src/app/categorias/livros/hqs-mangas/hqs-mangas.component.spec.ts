import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HqsMangasComponent } from './hqs-mangas.component';

describe('HqsMangasComponent', () => {
  let component: HqsMangasComponent;
  let fixture: ComponentFixture<HqsMangasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HqsMangasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HqsMangasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
