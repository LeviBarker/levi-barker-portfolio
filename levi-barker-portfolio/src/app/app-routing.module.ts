import { HomeComponent } from './pages/home/home.component';
import { ArticleComponent } from './pages/article/article.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent},
  { path: 'article/:id', component: ArticleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
