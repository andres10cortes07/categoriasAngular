import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CategoryModalComponent } from '../category-modal/category-modal.component';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CategoryModalComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: any[] = [];
  apiUrl = 'http://localhost:8080/categorias';

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.http.get<any[]>(`${this.apiUrl}/getAll`).subscribe(data => {
      this.categories = data;
    }, error => {
      console.error('Error al obtener categorías:', error);
    });
  }

  openModal() {
    const dialogRef = this.dialog.open(CategoryModalComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.createCategory(result);
      }
    });
  }

  createCategory(name: string) {
    const newCategory = { name };
    this.http.post(`${this.apiUrl}/create`, newCategory).subscribe(() => {
      this.getCategories();
    }, error => {
      console.error('Error al crear la categoría:', error);
    });
  }
}
