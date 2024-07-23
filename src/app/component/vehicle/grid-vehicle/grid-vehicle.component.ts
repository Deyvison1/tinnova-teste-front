import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vehicle } from 'src/app/model/vehicle.model';
import { VehicleService } from 'src/app/service/vehicle.service';

const ELEMENT_DATA: Vehicle[] = [];

@Component({
  selector: 'app-grid-vehicle',
  templateUrl: './grid-vehicle.component.html',
  styleUrls: ['./grid-vehicle.component.scss'],
})
export class GridVehicleComponent implements OnInit {
  displayedColumns: string[] = [
    'brand',
    'year',
    'color',
    'vehicle',
    'description',
    'sold',
    'actions',
  ];
  qtdVehiclesSold: number;
  dataSource = ELEMENT_DATA;

  constructor(private service: VehicleService, private router: Router) {}

  ngOnInit(): void {
    this.getAllfilters('', 0, '');
  }

  getAllfilters(brand: string, year: number, color: string) {
    this.service.getAllfilters(brand, year, color).subscribe((response) => {
      this.dataSource = response;
      this.qtdVehiclesSold = response.filter(x => x.sold === false).length;
    });
  }

  remove(id: number) {
    this.service.remove(id).subscribe(
      (success) => {
        alert('removido');

        this.getAllfilters('', 0, '');
      },
      (err) => {
        alert(err);
      }
    );
  }

  setFilters(event: any) {
    this.getAllfilters(event.brand, event.year, event.color);
  }

  add() {
    this.router.navigateByUrl('add-or-edit');
  }

  edit(vehicle: Vehicle) {
    this.router.navigateByUrl(`add-or-edit/${vehicle.id}`);
  }

  detail(id: number) {
    this.router.navigateByUrl(`add-or-edit/${id}/${true}`);
  }
}
