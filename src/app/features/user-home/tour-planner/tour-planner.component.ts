import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-tour-planner',
  templateUrl: './tour-planner.component.html',
  styleUrls: ['./tour-planner.component.scss']
})
export class TourPlannerComponent implements OnInit {

  tourPlannerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createTourPlannerForm();
  }

  createTourPlannerForm() {
    this.tourPlannerForm = this.fb.group({
			from: ['', Validators.required],
      to: ['', Validators.required],
      modeOfTravel: ['', Validators.required],
      dateOfJourney: ['', Validators.required],
      ownerVehicle: ['', Validators.required]
    });
  }
}
