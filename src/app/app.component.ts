import { Component } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import 'firebase/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  projects$: Observable<any[]>;
  constructor(/*firestore: AngularFirestore*/db: AngularFireDatabase) {
    // this.projects$ = firestore.collection('projects').valueChanges();
    this.projects$ = db.list('projects').valueChanges();
  }
}