import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    CardProdutoComponent,
    BreadcrumbComponent,
    CategoriasComponent,
    LivrosComponent,
    HqsMangasComponent,
    ArtesCinemaComponent,
    AdminComponent,
    CienciasComponent,
    DireitoComponent,
    EbookComponent,
    PapelariaComponent,
    LiteraturaNacionalComponent,
    LiteraturaEstrangeiraComponent,
    TerrorComponent,
    FantasiaComponent,
    InfantilComponent,
    PapeisComponent,
    TintasComponent,
    PinceisComponent,
    CanetasComponent,
    ModelagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
