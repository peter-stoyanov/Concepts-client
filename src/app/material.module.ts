import { NgModule } from '@angular/core';

import {
    MatButtonModule, 
    MatCheckboxModule,
    MatCard,
    MatToolbar,
    MatInput,
    MatCardModule,
    MatToolbarModule,
    MatInputModule
} from '@angular/material';

const MATERIAL_MODULES = [
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule
]

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
})
export class MaterialModule { }