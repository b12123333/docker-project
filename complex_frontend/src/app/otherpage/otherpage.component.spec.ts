import { ComponentFixture, TestBed } from '@angular/core/testing';
import { otherpage } from './otherpage.component';
import { ActivatedRoute } from '@angular/router';

describe('OtherpageComponent', () => {
  let component: otherpage;
  let fixture: ComponentFixture<otherpage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [otherpage],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => null, // 模擬 route 參數
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(otherpage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
