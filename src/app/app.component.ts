import { Component } from '@angular/core';
import { CategoryListComponent } from './components/category-list/category-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CategoryListComponent] // 
})
export class AppComponent {
}