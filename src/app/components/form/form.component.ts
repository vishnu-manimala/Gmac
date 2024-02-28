import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      jobId: ['', Validators.required],
      customer: ['', Validators.required],
      lpoNo: ['', Validators.required],
      lpoDate: ['', Validators.required],
      date: [''],
      completionDate: [''],
    });
  }

  // Handle form submission
  onSubmit() {
    // Process the form data
    console.log(this.form.value);
  }
}
