import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-other-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './otherpage.component.html',
})
export class otherpage {}
