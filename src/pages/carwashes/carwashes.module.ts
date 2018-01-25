import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarwashesPage } from './carwashes';

@NgModule({
  declarations: [
    CarwashesPage,
  ],
  imports: [
    IonicPageModule.forChild(CarwashesPage),
  ],
})
export class CarwashesPageModule {}
