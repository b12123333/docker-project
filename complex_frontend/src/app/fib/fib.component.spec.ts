import { ComponentFixture, TestBed } from '@angular/core/testing';

import { fib } from './fib.component';

describe('FibComponent', () => {
  let component: fib;
  let fixture: ComponentFixture<fib>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [fib]
    })
    .compileComponents();

    fixture = TestBed.createComponent(fib);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
