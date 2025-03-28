import { importProvidersFrom } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 

export const appConfig = {
  providers: [
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(
      MatDialogModule,
      FormsModule  // 
    )
  ],
  standalone: true
};