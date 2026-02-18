import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss'],
    imports: [CommonModule, RouterModule, TranslateModule]
})
export class LandingComponent implements OnInit, OnDestroy {
    year = new Date().getFullYear();
    currentLanguage = 'es';
    mobileMenuOpen = false;
    languageDropdownOpen = false;

    languages = [
        { code: 'en', name: 'English', flag: 'us.jpg' },
        { code: 'es', name: 'Español', flag: 'spain.jpg' },
        { code: 'pt', name: 'Português', flag: 'portugal.svg' }
    ];

    // Countdown properties
    countdownDays = 0;
    countdownHours = 0;
    countdownMinutes = 0;
    countdownSeconds = 0;
    private countdownInterval: any;

    // Carousel properties
    heroSlides: string[] = [
        'assets/images/crypto/features-img/img-1.png',
        'assets/images/crypto/features-img/img-2.png',
        'assets/images/crypto/bg-ico-hero.jpg'
    ];
    currentSlideIndex = 0;
    private autoRotateInterval: any;

    constructor(private translate: TranslateService) { }

    @HostListener('window:scroll')
    onScroll() {
        const elements = document.querySelectorAll('.feature-card');
        const roadmapItems = document.querySelectorAll('.roadmap-item');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-up');
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(el => observer.observe(el));
        roadmapItems.forEach(el => observer.observe(el));
    }

    startCountdown() {
        const targetDate = new Date('2027-01-30T00:00:00').getTime();

        this.countdownInterval = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate - now;

            if (difference > 0) {
                this.countdownDays = Math.floor(difference / (1000 * 60 * 60 * 24));
                this.countdownHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
                this.countdownMinutes = Math.floor((difference / 1000 / 60) % 60);
                this.countdownSeconds = Math.floor((difference / 1000) % 60);
            } else {
                clearInterval(this.countdownInterval);
                this.countdownDays = 0;
                this.countdownHours = 0;
                this.countdownMinutes = 0;
                this.countdownSeconds = 0;
            }
        }, 1000);
    }

    ngOnInit() {
        this.translate.setDefaultLang('es');
        this.translate.use('es');
        this.onScroll();
        this.startCountdown();
        this.startAutoRotateCarousel();
    }

    startAutoRotateCarousel() {
        this.autoRotateInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    ngOnDestroy() {
        if (this.countdownInterval) {
            clearInterval(this.countdownInterval);
        }
        if (this.autoRotateInterval) {
            clearInterval(this.autoRotateInterval);
        }
    }

    changeLanguage(lang: string) {
        this.currentLanguage = lang;
        this.translate.use(lang);
        this.languageDropdownOpen = false;
    }

    toggleLanguageDropdown() {
        this.languageDropdownOpen = !this.languageDropdownOpen;
    }

    closeMobileMenu() {
        this.mobileMenuOpen = false;
    }

    toggleMobileMenu() {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    getCurrentLanguageFlag(): string {
        const currentLang = this.languages.find(l => l.code === this.currentLanguage);
        return currentLang ? currentLang.flag : 'spain.jpg';
    }

    // Carousel methods
    previousSlide() {
        this.currentSlideIndex = (this.currentSlideIndex - 1 + this.heroSlides.length) % this.heroSlides.length;
    }

    nextSlide() {
        this.currentSlideIndex = (this.currentSlideIndex + 1) % this.heroSlides.length;
    }

    goToSlide(index: number) {
        this.currentSlideIndex = index;
    }
}
