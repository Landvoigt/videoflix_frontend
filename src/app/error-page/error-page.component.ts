import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { fadeInPage } from '../utils/animations';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.scss',
  animations: [fadeInPage]

})
export class ErrorPageComponent {

  constructor(
    private router: Router) { }
    
  navigateBack() {
    this.router.navigate(['/login']);
  }
}