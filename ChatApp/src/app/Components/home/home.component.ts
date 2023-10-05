import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userForm: FormGroup = new FormGroup({});
  submitted = false;
  apiErrorMessages: string[] = [];
  openChat = false;






  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initialzeForm()
    this.submitForm()

  }
  initialzeForm() {
    this.userForm = this.fromBuilder.group({
      Name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
    })
  }

  submitForm() {
    this.submitted = true;
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

}
