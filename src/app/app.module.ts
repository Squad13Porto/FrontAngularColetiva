import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/landingPage/header/header.component';
import { ButtonComponent } from './components/landingPage/button/button.component';
import { MainPageComponent } from './components/landingPage/main-page/main-page.component';
import { EscolaColetivaComponent } from './components/landingPage/escola-coletiva/escola-coletiva.component';
import { CursosComponent } from './components/landingPage/cursos/cursos.component';
import { AulasComponent } from './components/landingPage/aulas/aulas.component';
import { CardCollaboratorComponent } from './components/landingPage/card-collaborator/card-collaborator.component';
import { AboutUsComponent } from './components/landingPage/about-us/about-us.component';
import { CardUserComponent } from './components/landingPage/card-user/card-user.component';
import { AvaliacoesComponent } from './components/landingPage/avaliacoes/avaliacoes.component';
import { TagComponent } from './components/landingPage/tag/tag.component';
import { CommunityComponent } from './components/landingPage/community/community.component';
import { ForumComponent } from './components/landingPage/forum/forum.component';
import { MentoriaComponent } from './components/landingPage/mentoria/mentoria.component';
import { SocialMidiaComponent } from './components/landingPage/social-midia/social-midia.component';
import { FooterComponent } from './components/landingPage/footer/footer.component';
import { CarrosselNgxComponent } from './components/carrossel-ngx/carrossel-ngx.component';
import { CarrosselPrincipalComponent } from './components/landingPage/carrossel-principal/carrossel-principal.component';
import { CursoComponent } from './components/pagCursos/curso/curso.component';
import { HomeComponent } from './components/landingPage/home/home.component';
import { AvaliacaoCursosComponent } from './components/pagCursos/avaliacao-cursos/avaliacao-cursos.component';
import { PromessaComponent } from './components/pagCursos/promessa/promessa.component';
import { BeneficiosComponent } from './components/pagCursos/beneficios/beneficios.component';
import { PertencimentoComponent } from './components/pagCursos/pertencimento/pertencimento.component';
import { SolucaoComponent } from './components/pagCursos/solucao/solucao.component';
import { AprenderAquiComponent } from './components/pagCursos/aprender-aqui/aprender-aqui.component';
import { CertificacoesComponent } from './components/pagCursos/certificacoes/certificacoes.component';
import { GradeComponent } from './components/pagCursos/grade/grade.component';
import { ModuloComponent } from './components/pagCursos/modulo/modulo.component';
import { ProfessoresComponent } from './components/pagCursos/professores/professores.component';
import { CardProfessorComponent } from './components/pagCursos/card-professor/card-professor.component';
import { CompraComponent } from './components/pagCursos/compra/compra.component';
import { GarantiaComponent } from './components/pagCursos/garantia/garantia.component';
import { GatilhoComponent } from './components/pagCursos/gatilho/gatilho.component';
import { CallComponent } from './components/pagCursos/call/call.component';
import { AboutUsCursosComponent } from './components/pagCursos/about-us-cursos/about-us-cursos.component';
import { AulasAbertasComponent } from './components/landingPage/aulas-abertas/aulas-abertas.component';
import { AulasPilulasComponent } from './components/landingPage/aulas-pilulas/aulas-pilulas.component';
import { SegmentacaoComponent } from './components/pagCursos/segmentacao/segmentacao.component';
import { CarouselDeCursosComponent } from './components/landingPage/carousel-de-cursos/carousel-de-cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    SegmentacaoComponent,
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
    GradeComponent,
    ModuloComponent,
    ProfessoresComponent,
    CardProfessorComponent,
    CompraComponent,
    GarantiaComponent,
    GatilhoComponent,
    CallComponent,
    AboutUsCursosComponent,
    AulasAbertasComponent,
    AulasPilulasComponent,
    CarouselDeCursosComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    SlickCarouselModule,
    CarrosselNgxComponent,
    CarrosselPrincipalComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
