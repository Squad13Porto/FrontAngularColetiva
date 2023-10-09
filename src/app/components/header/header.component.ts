import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isScrolled = false;
  logoSrc = '../../../assets/images/LOGOTIPO_HORIZONTAL_BRANCO.png';
  scrolledLogoSrc = '../../../assets/images/LOGOTIPO_HORIZONTAL.png'

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isScrolled = scrollPosition > 100;
    this.updateLogoSrc();
  }

  private updateLogoSrc(): void {
    this.logoSrc = this.isScrolled ? this.scrolledLogoSrc : '../../../assets/images/LOGOTIPO_HORIZONTAL_BRANCO.png';
  }
}
