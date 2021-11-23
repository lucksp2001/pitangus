import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { LivrosComponent } from './categorias/livros/livros.component';
import { HqsMangasComponent } from './categorias/livros/hqs-mangas/hqs-mangas.component';
import { ArtesCinemaComponent } from './categorias/livros/artes-cinema/artes-cinema.component';
import { AdminComponent } from './categorias/livros/admin/admin.component';
import { CienciasComponent } from './categorias/livros/ciencias/ciencias.component';
import { DireitoComponent } from './categorias/livros/direito/direito.component';
import { EbookComponent } from './categorias/ebook/ebook.component';
import { PapelariaComponent } from './categorias/papelaria/papelaria.component';
import { LiteraturaNacionalComponent } from './categorias/ebook/literatura-nacional/literatura-nacional.component';
import { LiteraturaEstrangeiraComponent } from './categorias/ebook/literatura-estrangeira/literatura-estrangeira.component';
import { TerrorComponent } from './categorias/ebook/terror/terror.component';
import { FantasiaComponent } from './categorias/ebook/fantasia/fantasia.component';
import { InfantilComponent } from './categorias/ebook/infantil/infantil.component';
import { PapeisComponent } from './categorias/papelaria/papeis/papeis.component';
import { TintasComponent } from './categorias/papelaria/tintas/tintas.component';
import { PinceisComponent } from './categorias/papelaria/pinceis/pinceis.component';
import { CanetasComponent } from './categorias/papelaria/canetas/canetas.component';
import { ModelagemComponent } from './categorias/papelaria/modelagem/modelagem.component';

const routes: Routes = [
  
  {
    path: '', pathMatch: 'full', redirectTo: 'home'
  },

  {
    path: 'home', component: HomeComponent
  },

  {
    path: 'categorias', component: CategoriasComponent 
  },

  //Rotas das categorias
    //Rota dos livros
  {
    path: 'categorias/livros', component: LivrosComponent 
  },

  {
    path: 'categorias/livros/hqs-mangas', component: HqsMangasComponent
  },

  {
    path: 'categorias/livros/artes-cinema', component: ArtesCinemaComponent
  },

  {
    path: 'categorias/livros/admin', component: AdminComponent
  },

  {
    path: 'categorias/livros/ciencias', component: CienciasComponent
  },

  {
    path: 'categorias/livros/direito', component: DireitoComponent
  },

    //Rotas dos Ebooks
  {
    path: 'categorias/ebook', component: EbookComponent
  },

  {
    path: 'categorias/ebook/literatura-nacional', component: LiteraturaNacionalComponent
  },


  {
    path: 'categorias/ebook/literatura-estrangeira', component: LiteraturaEstrangeiraComponent
  },

  {
    path: 'categorias/ebook/terror', component: TerrorComponent
  },

  {
    path: 'categorias/ebook/fantasia', component: FantasiaComponent 
  },

  {
    path: 'categorias/ebook/infantil', component: InfantilComponent 
  },

    //Rotas da Papelaria
  {
    path: 'categorias/papelaria', component: PapelariaComponent
  },

  {
    path: 'categorias/papelaria/papeis', component: PapeisComponent
  },

  {
    path: 'categorias/papelaria/tintas', component: TintasComponent
  },

  {
    path: 'categorias/papelaria/pinceis', component: PinceisComponent
  },

  {
    path: 'categorias/papelaria/canetas', component: CanetasComponent
  },

  {
    path: 'categorias/papelaria/modelagem', component: ModelagemComponent
  },
  //Fim das rotas

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
