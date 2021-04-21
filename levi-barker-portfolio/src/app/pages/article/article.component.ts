import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  urlSlug: string = '';
  article: any = {};
  showHomeNavButton: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      this.urlSlug = paramMap.params.id;
      this.firestore.doc(`articles/${this.urlSlug}`).valueChanges().subscribe((response) => {
        if(!response){
          this.router.navigate(['./home']);
        }
        this.article = response;
      });
    });
  }


  onContainerScroll(event: any){
    this.showHomeNavButton = event.target.scrollTop;
  }

  goHome(){
    this.router.navigate(['./home']);
  }

  scrollToElement($element: any, sidenav?: any): void {
    if(sidenav){
      sidenav.close();
    }
    $element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

}
