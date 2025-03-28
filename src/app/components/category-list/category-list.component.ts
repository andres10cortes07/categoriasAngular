import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
// Para el modal
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { CategoryModalComponent } from '../category-modal/category-modal.component';
// Importa el servicio para las peticiones HTTP
import { CategoryService, Category } from '../../services/category.service';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule, MatDialogModule, CategoryModalComponent],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {
  // Guardar la data que trae el servicio
  categories: Category[] = []; 

  constructor(
    private categoryService: CategoryService, 
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.getAllCategories().subscribe( 
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Error al obtener categorías:', error);
      }
    );
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
    this.categoryService.createCategory(newCategory).subscribe( 
      () => {
        this.getCategories(); // Recargar la lista después de crear
      },
      (error) => {
        console.error('Error al crear la categoría:', error);
      }
    );
  }
}