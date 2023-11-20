import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursoComponent } from './components/pagCursos/curso/curso.component';
import { HomeComponent } from './components/landingPage/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cursos', component: CursoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
