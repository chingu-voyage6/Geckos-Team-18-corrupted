import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@material/material.module';
import { CollectionComponent } from '@shared/components/collection/collection.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule],
  declarations: [CollectionComponent],
  exports: [CollectionComponent]
})
export class SharedModule {}
