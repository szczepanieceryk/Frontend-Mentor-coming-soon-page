import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'coming-soon';

  mainText = "Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals."
  inputTxt = "Email Address";


  onFormSubmit(){
      console.log('Formularz wysłan')
  }
}
