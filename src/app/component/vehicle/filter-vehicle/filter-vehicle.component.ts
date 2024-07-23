import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-vehicle',
  templateUrl: './filter-vehicle.component.html',
  styleUrls: ['./filter-vehicle.component.scss']
})
export class FilterVehicleComponent {
  form: FormGroup;

  @Output() newItemEvent = new EventEmitter<any>();
  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      brand: [''],
      year: [0],
      color: ['']
    });
  }

  filter() {
    this.newItemEvent.emit(this.form.value);
  }
}
