import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'footer-widget',
    imports: [RouterModule],
    template: `
        <div class="py-12 px-12 mx-0 pt-20 lg:px-20">
            <div class="grid grid-cols-12 gap-8 font-poppins">
                <!-- Identité -->
                <div class="col-span-12 md:col-span-3">
                    <img src="img/olibologo.png" class="w-32 mb-4" />
                </div>

                <!-- Ligue -->
                <div class="col-span-12 md:col-span-3">
                    <h4 class="text-2xl font-semibold mb-4">La Ligue</h4>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold" (click)="goToAbout()" >À propos</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold" (click)="goToOrganisation()">Organisation</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold" (click)="goToRegulations()">Règlement</a>
                    <a class="block text-lg cursor-pointer hover:font-bold" (click)="goToTeams()">Équipes</a>
                </div>

                <!-- Compétition -->
                <div class="col-span-12 md:col-span-3">
                    <h4 class="text-2xl font-semibold mb-4">Compétition</h4>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold">Calendrier</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold">Résultats</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold">Classements</a>
                    <a class="block text-lg cursor-pointer hover:font-bold">Votes & Récompenses</a>
                </div>

                <!-- Communauté -->
                <div class="col-span-12 md:col-span-3">
                    <h4 class="text-2xl font-semibold mb-4">Communauté</h4>
                    <a class="block text-lg mb-2 hover:font-bold cursor-pointer ">Galerie</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold">Actualités</a>
                    <a class="block text-lg mb-2 cursor-pointer hover:font-bold">Devenir partenaire</a>
                    <a class="block text-lg cursor-pointer hover:font-bold">Contact</a>
                </div>
            </div>

            <div class="mt-16 text-center text-sm text-gray-500 font-bold">© 2026 Olibo League — Tous droits réservés</div>
        </div>
    `
})
export class FooterWidget {
    constructor(public router: Router) {}

    goToAbout() {
        this.router.navigate(['/aboutus']);
    }
    goToOrganisation() {
        this.router.navigate(['/organisation']);
    }
    goToRegulations() {
        this.router.navigate(['/règlement']);
    }
    goToTeams() {
        this.router.navigate(['/équipes']);
    }
}
