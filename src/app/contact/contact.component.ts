import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form: FormGroup;
  errorMessage = false;
  successMessage = false; 

  constructor(
    public fb: FormBuilder,
    private http: HttpClient
  ) {
    this.form = this.fb.group({
      fullname: [''],
      email: [''],
      comment: ['']
    })
  }

  ngOnInit() { }

  submitForm() {
    this.errorMessage = false;
    this.successMessage = false; 
    var formData: any = new FormData();
    formData.append("fullname", this.form.get('fullname')!.value);
    formData.append("email", this.form.get('email')!.value);
    formData.append("comment", this.form.get('comment')!.value);

    this.http.post('https://formspree.io/f/mjvpdpgb', formData).subscribe(
      
    response => this.successMessage = true,

    error => this.errorMessage = true,
    )

  }
}
