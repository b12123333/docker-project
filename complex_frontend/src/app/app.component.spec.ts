import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],  // <== 改用 imports
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
  });

  it('應該渲染出 Learn Angular 連結', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkElement = compiled.querySelector('.App-link');
    expect(linkElement?.textContent).toContain('Learn Angular');
  });
});
