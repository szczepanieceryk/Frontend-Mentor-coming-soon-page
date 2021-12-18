import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // content for main text and input placeholder
  mainTxt = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
  inputTxt = "Email Address";

  // email validation
  newsletterForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email])
  })

  // getting the email from the form
  get email(){
    return this.newsletterForm.get('email');
  } 

  // form submit function
  submitEmail(){
    alert("You're successfully subscribed to our newsletter 😁");
    }
}
