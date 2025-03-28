import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
}

@Injectable({ providedIn: 'root' })
export class CategoryService {
  private apiUrl = 'http://localhost:8080/categorias'; 

  constructor(private http: HttpClient) {}

  // Obtener todas las categorías
  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(`${this.apiUrl}/getAll`);
  }

  // Crear una nueva categoría
  createCategory(category: { name: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, category);
  }
}