import { Component, HostListener } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
    selector: 'topbar-widget',
    standalone: true,
    imports: [CommonModule, RouterModule, ButtonModule, RippleModule],
    animations: [
        trigger('mobileMenu', [
            transition(':enter', [style({ transform: 'translateX(100%)', opacity: 0 }), animate('300ms cubic-bezier(0.22,1,0.36,1)', style({ transform: 'translateX(0)', opacity: 1 }))]),
            transition(':leave', [animate('300ms cubic-bezier(0.22,1,0.36,1)', style({ transform: 'translateX(100%)', opacity: 0 }))])
        ])
    ],
    template: `
        <header
            class="fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300"
            [ngClass]="{
                'bg-white/95 backdrop-blur-md shadow-sm': isScrolled,
                'bg-transparent': !isScrolled
            }"
        >
            <div class="max-w-7xl mx-auto px-4 lg:px-8">
                <div class="flex items-center justify-between  h-20">
                    <div class="flex gap-12">
                        <!-- Logo -->
                        <a class="flex items-center cursor-pointer">
                            <img src="img/olibologo.png" class="w-20 h-20 object-contain" />
                        </a>

                        <!-- Desktop Nav -->
                        <nav class="hidden lg:flex items-center gap-12  font-volkhov">
                            <a
                                *ngFor="let item of menu"
                                (click)="navigate(item)"
                                pRipple
                                class="text-gray-700 text-lm font-medium transition-all duration-200
                 hover:text-coral hover:-translate-y-0.5 cursor-pointer"
                            >
                                {{ item.label }}
                            </a>
                        </nav>
                    </div>

                    <!-- CTA Desktop -->
                    <div class="hidden lg:block">
                        <button
                            pButton
                            pRipple
                            routerLink="/auth/login"
                            class="!bg-[#f5bbe2] hover:!bg-[#f8addf]
                 !text-black !font-volkhov rounded-full px-6
                 transition-all duration-200 hover:-translate-y-0.5"
                            label="Inscription"
                        ></button>
                    </div>

                    <!-- Mobile Toggle -->
                    <button class="lg:hidden p-2 text-gray-700 transition-colors hover:text-coral" (click)="toggleMobile()">
                        <i class="pi text-2xl" [ngClass]="isMobileOpen ? 'pi-times' : 'pi-bars'"></i>
                    </button>
                </div>
            </div>
        </header>

        <!-- Mobile Menu -->
        <div *ngIf="isMobileOpen" class="fixed inset-0 z-40 lg:hidden">
            <!-- Overlay -->
            <div class="absolute inset-0 bg-black/20" (click)="closeMobile()"></div>

            <!-- Drawer -->
            <div @mobileMenu class="absolute right-0 top-0 h-full w-80 bg-white shadow-xl p-6 pt-24">
                <nav class="flex flex-col gap-4 font-volkhov">
                    <a
                        *ngFor="let item of menu; let i = index"
                        (click)="navigate(item)"
                        pRipple
                        class="text-lg text-gray-700 transition-colors
               hover:text-coral py-2 border-b border-gray-100 cursor-pointer"
                    >
                        {{ item.label }}
                    </a>
                </nav>

                <button
                    pButton
                    pRipple
                    routerLink="/auth/login"
                    class="w-full mt-8 !bg-[#f5bbe2] hover:!bg-[#f8addf]
             !text-black rounded-full !font-volkhov"
                    label="Inscription"
                ></button>
            </div>
        </div>
    `
})
export class TopbarWidget {
    isScrolled = false;
    isMobileOpen = false;

    menu = [
        { label: 'Accueil', route: '/landing', fragment: 'home' },
        { label: 'À propos', route: '/aboutus', fragment: 'features' },
        { label: 'Équipes & Joueurs', route: '/équipes', fragment: 'highlights' },
        { label: 'Actualités', route: '/landing', fragment: 'pricing' },
        { label: 'Galerie', route: '/landing', fragment: 'gallery' }
    ];

    constructor(public router: Router) {}

    @HostListener('window:scroll')
    onScroll() {
        this.isScrolled = window.scrollY > 20;
    }

    toggleMobile() {
        this.isMobileOpen = !this.isMobileOpen;
    }

    closeMobile() {
        this.isMobileOpen = false;
    }

    navigate(item: any) {
        this.router.navigate([item.route], { fragment: item.fragment });
        this.closeMobile();
    }
}
