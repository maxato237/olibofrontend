import { Component } from '@angular/core';
import { StyleClassModule } from 'primeng/styleclass';
import { Router, RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'topbar-widget',
    imports: [RouterModule, StyleClassModule, ButtonModule, RippleModule],
    template: `<a class="flex items-center" href="#">
            <img src="img/olibologo.png" alt="Image" class="w-[6em] ml-4 lg:ml-0" />
        </a>

        <a pButton [text]="true" severity="secondary" [rounded]="true" pRipple class="lg:!hidden" pStyleClass="@next" enterClass="hidden" leaveToClass="hidden" [hideOnOutsideClick]="true">
            <i class="pi pi-bars !text-2xl"></i>
        </a>

        <div class="items-center bg-surface-0 dark:bg-surface-900 grow justify-between hidden lg:flex bg-transparent w-full left-0 top-full px-12 lg:px-0 z-20 rounded-border">
            <ul class=" font-volkhov list-none p-0 m-0 flex lg:items-center select-none flex-col lg:flex-row cursor-pointer gap-8">
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'home' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-medium text-lg">
                        <span>Accueil</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'features' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-mediumtext-lg">
                        <span>A propos</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'highlights' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-mediumtext-lg">
                        <span>Equipes & Joueurs</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-mediumtext-lg">
                        <span>Actualités</span>
                    </a>
                </li>
                <li>
                    <a (click)="router.navigate(['/landing'], { fragment: 'pricing' })" pRipple class="px-0 py-4 text-surface-900 dark:text-surface-0 font-mediumtext-lg">
                        <span>Galerie</span>
                    </a>
                </li>
            </ul>
            <div class="flex justify-end  py-4 lg:py-0 mt-4 lg:mt-0 gap-2 ">
                <button class="!text-black !bg-[#f5bbe2] hover:!bg-[#f8addf] !border !border-[#f5bbe2] !font-volkhov !text-sm w-[8em]" rounded="true" pButton pRipple label="Inscription" routerLink="/auth/login"></button>
            </div>
        </div> `
})
export class TopbarWidget {
    constructor(public router: Router) {}
}
