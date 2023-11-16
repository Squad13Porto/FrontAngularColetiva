import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/ladingPage/header/header.component';
import { ButtonComponent } from './components/ladingPage/button/button.component';
import { MainPageComponent } from './components/ladingPage/main-page/main-page.component';
import { EscolaColetivaComponent } from './components/ladingPage/escola-coletiva/escola-coletiva.component';
import { CursosComponent } from './components/ladingPage/cursos/cursos.component';
import { AulasComponent } from './components/ladingPage/aulas/aulas.component';
import { CardCollaboratorComponent } from './components/ladingPage/card-collaborator/card-collaborator.component';
import { AboutUsComponent } from './components/ladingPage/about-us/about-us.component';
import { CardUserComponent } from './components/ladingPage/card-user/card-user.component';
import { AvaliacoesComponent } from './components/ladingPage/avaliacoes/avaliacoes.component';
import { TagComponent } from './components/ladingPage/tag/tag.component';
import { CommunityComponent } from './components/ladingPage/community/community.component';
import { ForumComponent } from './components/ladingPage/forum/forum.component';
import { MentoriaComponent } from './components/ladingPage/mentoria/mentoria.component';
import { SocialMidiaComponent } from './components/ladingPage/social-midia/social-midia.component';
import { FooterComponent } from './components/ladingPage/footer/footer.component';
import { SlideAulasComponent } from './components/slide-aulas/slide-aulas.component';
import { CarrosselPrincipalComponent } from './components/ladingPage/carrossel-principal/carrossel-principal.component';
import { CursoComponent } from './components/pagCursos/curso/curso.component';
import { HomeComponent } from './components/ladingPage/home/home.component';
import { AvaliacaoCursosComponent } from './components/pagCursos/avaliacao-cursos/avaliacao-cursos.component';
import { PromessaComponent } from './components/pagCursos/promessa/promessa.component';
import { BeneficiosComponent } from './components/pagCursos/beneficios/beneficios.component';
import { PertencimentoComponent } from './components/pagCursos/pertencimento/pertencimento.component';
import { SolucaoComponent } from './components/pagCursos/solucao/solucao.component';
import { AprenderAquiComponent } from './components/pagCursos/aprender-aqui/aprender-aqui.component';
import { CertificacoesComponent } from './components/pagCursos/certificacoes/certificacoes.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    MainPageComponent,
    EscolaColetivaComponent,
    CursosComponent,
    AulasComponent,
    CardCollaboratorComponent,
    AboutUsComponent,
    CardUserComponent,
    AvaliacoesComponent,
    TagComponent,
    CommunityComponent,
    ForumComponent,
    MentoriaComponent,
    SocialMidiaComponent,
    FooterComponent,
    CursoComponent,
    HomeComponent,
    AvaliacaoCursosComponent,
    PromessaComponent,
    BeneficiosComponent,
    PertencimentoComponent,
    SolucaoComponent,
    AprenderAquiComponent,
    CertificacoesComponent,
  ],
  imports: [
            BrowserModule, BrowserAnimationsModule,
            AppRoutingModule, HttpClientModule,
            SlickCarouselModule, SlideAulasComponent,
            CarrosselPrincipalComponent
          ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
