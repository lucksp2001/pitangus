import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiteraturaEstrangeiraComponent } from './literatura-estrangeira.component';

describe('LiteraturaEstrangeiraComponent', () => {
  let component: LiteraturaEstrangeiraComponent;
  let fixture: ComponentFixture<LiteraturaEstrangeiraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiteraturaEstrangeiraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiteraturaEstrangeiraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
