import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridVehicleComponent } from './component/vehicle/grid-vehicle/grid-vehicle.component';
import { AddOrEditComponent } from './component/vehicle/add-or-edit/add-or-edit.component';

const routes: Routes = [
  {
    component: GridVehicleComponent,
    path: 'vehicle',
  },
  { component: AddOrEditComponent, path: 'add-or-edit/:id' },

  { component: AddOrEditComponent, path: 'add-or-edit' },

  { component: AddOrEditComponent, path: 'add-or-edit/:id/:detail' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
