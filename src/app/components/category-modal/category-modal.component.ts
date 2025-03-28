import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './category-modal.component.html',
  styleUrls: ['./category-modal.component.css']
})

export class CategoryModalComponent {
  categoryName: string = '';

  constructor(public dialogRef: MatDialogRef<CategoryModalComponent>) {}

  save() {
    if (this.categoryName.trim()) {
      // cierra el modal y envia la categoria creada
      this.dialogRef.close(this.categoryName);
    }
  }

  close() {
    // simplemente cierra el modal
    this.dialogRef.close();
  }
}
