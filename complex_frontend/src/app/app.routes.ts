import { Routes } from '@angular/router';
import {fib} from './fib/fib.component';
import {otherpage} from './otherpage/otherpage.component';

export const routes: Routes = [
  { path: '', component: fib },
  { path: 'otherpage', component: otherpage },
];

