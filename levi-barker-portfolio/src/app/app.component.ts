import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  appCards: any[] = [
    {
      title: 'Photography Pricing Calculator',
      description: 'Simple app for pricing out freelance photography.',
      imageSrc: '../assets/Artboard 1.png',
      imageAlt: 'Photography Pricing Calculator App',
      clickCallback: () => {
        alert('clicked');
      }
    }
  ]

  uxCards: any[] = [
    {
      title: 'Photography Pricing Calculator',
      description: 'Simple app for pricing out freelance photography.',
      imageSrc: '../assets/Artboard 1.png',
      imageAlt: 'Photography Pricing Calculator App',
      clickCallback: () => {
        alert('clicked');
      }
    }
  ]

  formGroup: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    message: new FormControl()
  });

  scrollToElement($element: any): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  goTo(location: string){
    window.location.href = window.location.href.split("#")[0] + location;
  }

}
