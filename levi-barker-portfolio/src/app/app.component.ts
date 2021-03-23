import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faDribbble, faBehance, faMedium, } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showHomeNavButton: boolean = false;
  twitter = faTwitter;
  instagram = faInstagram;
  dribbble = faDribbble;
  behance = faBehance;
  medium = faMedium;

  appCards: any[] = [
    {
      title: 'Photography Pricing Calculator',
      description: 'Simple app for pricing out freelance photography.',
      imageSrc: '../assets/Artboard 1.png',
      imageAlt: 'Photography Pricing Calculator App',
      clickCallback: () => {
        window.open('https://photography-calculator.firebaseapp.com/', '_blank');
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

  scrollToElement($element: any, sidenav?: any): void {
    if(sidenav){
      sidenav.close();
    }
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  goTo(location: string) {
    window.open(location);
  }

  onContainerScroll(event: any){
    this.showHomeNavButton = event.target.scrollTop;
  }

}
