import { NgModule } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';

const MaterialComponents =[
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatSidenavModule
];

@NgModule({
  imports: [MaterialComponents],
  exports:[MaterialComponents]
})
export class MaterialModule { }
