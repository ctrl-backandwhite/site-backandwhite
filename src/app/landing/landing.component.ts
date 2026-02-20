import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { TablesModule } from '../pages/tables/tables.module';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SharedModule } from '../cyptolanding/shared/shared.module';
import { LoginService } from '../core/services/login.service';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageService } from '../core/services/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  imports: [CommonModule, AccordionModule, TablesModule, TabsModule, SharedModule, SlickCarouselModule, BsDropdownModule, TranslateModule],
  providers: []
})

/**
 * Crypto landing page
 */
export class LandingComponent implements OnInit {
  private readonly loginService = inject(LoginService);
  private readonly languageService = inject(LanguageService);
  private readonly cookieService = inject(CookieService);

  // set the currenr year
  year: number = new Date().getFullYear();
  currentSection: any = 'home';

  // Language dropdown
  cookieValue: any;
  flagvalue: any;
  valueset: any = 'assets/images/flags/us.jpg';

  listLang: any = [
    { text: 'English', flag: 'assets/images/flags/us.jpg', lang: 'en' },
    { text: 'Español', flag: 'assets/images/flags/spain.jpg', lang: 'es' },
    { text: 'Português', flag: 'assets/images/flags/portugal.svg', lang: 'pt' },
    { text: 'Deutsch', flag: 'assets/images/flags/germany.jpg', lang: 'de' },
    { text: 'Italiano', flag: 'assets/images/flags/italy.jpg', lang: 'it' },
    { text: 'Русский', flag: 'assets/images/flags/russia.jpg', lang: 'ru' },
    { text: 'Français', flag: 'assets/images/flags/french.jpg', lang: 'fr' },
    { text: '中文（繁體）', flag: 'assets/images/flags/china.svg', lang: 'zh-Hant' }
  ];

  // Timeline config
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true
  };
  // Team config
  config = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  };
  // About config
  aboutConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: false
  };


  private _trialEndsAt;

  private _diff: number;
  _days: number;
  _hours: number;
  _minutes: number;
  _seconds: number;

  constructor() {

  }

  ngOnInit() {
    this._trialEndsAt = "2026-12-31";

    // Initialize language
    this.cookieValue = this.cookieService.get('lang');
    const val = this.listLang.filter(x => x.lang === this.cookieValue);
    if (val.length === 0) {
      this.valueset = 'assets/images/flags/us.jpg';
    } else {
      this.flagvalue = val.map(element => element.flag)[0];
    }

    interval(3000).pipe(
      map((x) => {
        this._diff = Date.parse(this._trialEndsAt) - Date.parse(new Date().toString());
      })).subscribe((x) => {
        this._days = this.getDays(this._diff);
        this._hours = this.getHours(this._diff);
        this._minutes = this.getMinutes(this._diff);
        this._seconds = this.getSeconds(this._diff);
      });

    // Initialize particles.js
    this.initParticles();
  }

  /**
   * Initialize particles.js
   */
  initParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS.load('particles-js', 'assets/particles.json', function () {
        console.log('particles.js loaded');
      });
    }
  }

  getDays(t) {
    return Math.floor(t / (1000 * 60 * 60 * 24));
  }

  getHours(t) {
    return Math.floor((t / (1000 * 60 * 60)) % 24);
  }

  getMinutes(t) {
    return Math.floor((t / 1000 / 60) % 60);
  }

  getSeconds(t) {
    return Math.floor((t / 1000) % 60);
  }

  ngOnDestroy(): void {
    // this.subscription.unsubscribe();
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById('navbar');
    if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
      navbar.classList.add('nav-sticky')
    } else {
      navbar.classList.remove('nav-sticky')
    }
  }

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById('topnav-menu-content').classList.toggle('show');
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Handle login button click
   */
  onLogin(): void {
    this.loginService.initiateLogin();
  }

  /**
   * Set language
   */
  setLanguage(text: string, lang: string, flag: string): void {
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }
}
