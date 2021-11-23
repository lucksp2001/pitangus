import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinceisComponent } from './pinceis.component';

describe('PinceisComponent', () => {
  let component: PinceisComponent;
  let fixture: ComponentFixture<PinceisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinceisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PinceisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
