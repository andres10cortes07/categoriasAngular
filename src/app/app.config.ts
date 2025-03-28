import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; // 👈 IMPORTAR FormsModule

export const appConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      MatDialogModule,
      FormsModule  // 👈 Asegúrate de incluir FormsModule
    )
  ],
  standalone: true
};