import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
	
  @Input() project: Partial<{name: string, url: string, imageUrl: string, builtWith: string[], linkDescription: string}> = {};

  constructor() { }

  ngOnInit(): void {
  }
  
  openURL(url: string){
  	alert(url);
  }

}
