import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { MaterialRoutingModule } from './material-routing.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialRoutingModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    MatInputModule
  ]
})
export class MaterialModule { }
