import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { VehicleService } from 'src/app/service/vehicle.service';

@Component({
  selector: 'app-add-or-edit',
  templateUrl: './add-or-edit.component.html',
  styleUrls: ['./add-or-edit.component.scss']
})
export class AddOrEditComponent implements OnInit {
  form: FormGroup;
  isAdd: boolean;
  isDetail: boolean = false;
  brands: string[]  = ['Fiat', 'Ford', 'Renault'];

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: VehicleService, private router: Router) {

  }

  ngOnInit(): void {
     this.initForm();
     const id = this.route.snapshot.paramMap.get('id');
     const isDetail = this.route.snapshot.paramMap.get('detail');
     this.isDetail = (isDetail === 'true')? true : false;
     if(!id) {
        this.isAdd = true;
     } else {
        this.isAdd = false;
        this.pacthValueEdit(id);
     }
  }

  pacthValueEdit(id: any) {
    this.service.getById(id).subscribe(
      (resp) => {
        this.form.patchValue(resp);
        this.form.get('brand')?.setValue(resp.brand);
      }
    );
  }

  save() {
    if(this.isAdd) {
      this.service.add(this.form.value).subscribe(
        (resp) => {
          alert('sucesso');
          this.router.navigateByUrl('vehicle');
        }
      );
    } else {
      this.service.update(this.form.value).subscribe(
        (resp) => {
          console.log(resp);
        }
      );
    }
  }

  initForm() {
    this.form = this.fb.group({
      id: [],
      vehicle: [''],
      brand: [''],
      year: [null],
      description: [''],
      color: ['']
    });
  }

  compareObjects(o1: string, o2: string) {
    if(o1 == o2)
    return true;
    else return false
  }
}
