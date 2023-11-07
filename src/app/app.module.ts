import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { EscolaColetivaComponent } from './components/escola-coletiva/escola-coletiva.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { AulasComponent } from './components/aulas/aulas.component';
import { CardCollaboratorComponent } from './components/card-collaborator/card-collaborator.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { AvaliacoesComponent } from './components/avaliacoes/avaliacoes.component';
import { TagComponent } from './components/tag/tag.component';
import { CommunityComponent } from './components/community/community.component';
import { ForumComponent } from './components/forum/forum.component';
import { MentoriaComponent } from './components/mentoria/mentoria.component';
import { SocialMidiaComponent } from './components/social-midia/social-midia.component';
import { FooterComponent } from './components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
