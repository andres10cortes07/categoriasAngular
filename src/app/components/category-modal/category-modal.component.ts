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
      this.dialogRef.close(this.categoryName);
    }
  }

  close() {
    this.dialogRef.close();
  }
}
