import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram, faDribbble, faBehance, faMedium, faAmazon, faCodepen, faStackOverflow} from '@fortawesome/free-brands-svg-icons';
import { AngularFirestore } from '@angular/fire/firestore';

import {Observable} from 'rxjs';
import {take} from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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

  constructor(private firestore: AngularFirestore, private router: Router){}

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
      title: 'Mighty Missouri Coffee App',
      description: 'UX case study for Mighty Missouri Coffee Company',
      imageSrc: '../assets/Artboard 1.png',
      imageAlt: 'Mighty Missouri Coffee App',
      clickCallback: () => {
        this.router.navigate(['./article/case-study-1']);
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
    this.getProjects();
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

  projects$: Observable<any> | null = null;
  getProjects(){
    this.projects$ = this.firestore.collection('projects').valueChanges().pipe(take(1));
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

  goToLink(link: any){
    if(link.routerLink){
      this.router.navigate([`${link.routerLink}`]);
    } else {
      window.open(link.url, '_blank');
    }
  }

}
