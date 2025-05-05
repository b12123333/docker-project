import { ComponentFixture, TestBed } from '@angular/core/testing';

import { otherpage } from './otherpage.component';

describe('OtherpageComponent', () => {
  let component: otherpage;
  let fixture: ComponentFixture<otherpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [otherpage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(otherpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
