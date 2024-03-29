import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faDribbble, faBehance, faMedium, faAmazon, faCodepen, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  showHomeNavButton: boolean = false;
  twitter = faTwitter;
  instagram = faInstagram;
  dribbble = faDribbble;
  behance = faBehance;
  medium = faMedium;
  amazon = faAmazon;
  codepen = faCodepen;
  stackOverflow = faStackOverflow;
  name: string = '';
  email: string = '';
  message: string = '';

  showCode: boolean = false;

  constructor(private firestore: AngularFirestore){}

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

  ngOnInit(){
    this.getBooks();
  }

  toggleShowCode(){
    this.showCode = !this.showCode;
  }

  scrollToElement($element: any, sidenav?: any): void {
    if(sidenav){
      sidenav.close();
    }
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  goTo(location: string) {
    window.open(location);
  }

  books$: Observable<any> | null = null;

  getBooks(){
    this.books$ = this.firestore.collection('books').valueChanges().pipe(take(1));
  }

  onContainerScroll(event: any){
    this.showHomeNavButton = event.target.scrollTop;
  }


  sendingContact = false;
  async sendContactMessage(){
    this.sendingContact = true;
    await this.firestore.collection('messages').add({
      to: ['dev.levibarker@gmail.com'],
      message: {
        subject: `Portfolio contact from: ${this.name}`,
        text: `From Email: ${this.email} - ${this.message}`
      }
    }).catch(() => {
      alert('Error sending message, please try again later');
    });
    this.sendingContact = false;
    this.name = '';
    this.email = '';
    this.message = '';
  }

}
