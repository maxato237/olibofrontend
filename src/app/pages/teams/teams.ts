import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FooterWidget } from '../../layout/component/footerwidget';
import { TopbarWidget } from '../../layout/component/topbarwidget.component';

interface Team {
    id: number;
    name: string;
    shortName: string;
    founded: number;
    coach: string;
    president: string;
    stadium: string;
    colors: string;
    description: string;
    logo: string;
    players: number;
    matches: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
    points: number;
    position: number;
}

@Component({
    selector: 'app-teams',
    standalone: true,
    imports: [CommonModule, FormsModule, RouterModule, TopbarWidget, FooterWidget, ButtonModule, InputTextModule, DividerModule, RippleModule, StyleClassModule],
    template: `
        <div class="!bg-[#fdfcfa] dark:bg-surface-900 pb-4">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-8 px-2 mx-0 md:mx-12 lg:px-20 flex items-center justify-between absolute z-50 bg-transparent w-[95vw]" />

                <div id="hero" class="lg:mb-[7em] pb-[8em] md:pt-[14em] pt-[8em] px-0 lg:px-0 overflow-hidden bg-[url('/img/teamcollage.png')] bg-no-repeat bg-cover bg-center relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
                    <div class="mx-20 md:mx-[5em] lg:mx-[8em] mt-0 md:mt-6 w-[90vw]">
                        <span class=" font-poppins text-[#EBA08B] text-sm md:text-lg font-bold tracking-wider uppercase">Notre écosystème</span>
                        <h1 class="w-[45vw] md:w-[55vw] lg:w-[45vw] text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-volkhov">Les équipes Olibo</h1>

                        <p class=" pt-5 w-[55vw] md:w-[30vw]  font-normal text-sm md:text-base leading-normal md:mt-4 text-gray-700 font-poppins">
                            Découvrez les {{ teams.length }} équipes qui font vivre la Olibo League. Chacune apporte sa passion, son identité et son ambition à notre compétition.
                        </p>
                    </div>
                </div>

                <!-- Search & Filter Section -->
                <div class="px-6 lg:px-20 py-8 bg-white">
                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="relative">
                                <i class="pi pi-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                                <input
                                    type="text"
                                    [(ngModel)]="searchTerm"
                                    (input)="filterTeams()"
                                    placeholder="Rechercher une équipe..."
                                    class="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg font-poppins text-gray-700 focus:outline-none focus:border-[#E28D98] transition-colors"
                                />
                            </div>
                            <div class="flex gap-3">
                                <button
                                    (click)="sortBy('name')"
                                    [ngClass]="{ '!bg-[#E28D98] !text-white': currentSort === 'name' }"
                                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-poppins font-semibold text-gray-700 hover:border-[#E28D98] transition-colors"
                                >
                                    Par nom
                                </button>
                                <button
                                    (click)="sortBy('points')"
                                    [ngClass]="{ '!bg-[#E28D98] !text-white': currentSort === 'points' }"
                                    class="flex-1 px-4 py-3 border border-gray-300 rounded-lg font-poppins font-semibold text-gray-700 hover:border-[#E28D98] transition-colors"
                                >
                                    Par classement
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Stats Overview -->
                <div class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class="max-w-6xl mx-auto">
                        <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                            <div class="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                <span class="text-4xl font-volkhov font-bold text-[#E28D98]">{{ teams.length }}</span>
                                <p class="font-poppins text-gray-600 text-sm mt-2">Équipes</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                <span class="text-4xl font-volkhov font-bold text-[#E28D98]">{{ getTotalPlayers() }}</span>
                                <p class="font-poppins text-gray-600 text-sm mt-2">Joueurs</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                <span class="text-4xl font-volkhov font-bold text-[#E28D98]">{{ getTotalMatches() }}</span>
                                <p class="font-poppins text-gray-600 text-sm mt-2">Matchs joués</p>
                            </div>
                            <div class="bg-white rounded-lg p-6 border border-gray-200 text-center">
                                <span class="text-4xl font-volkhov font-bold text-[#E28D98]">{{ getTotalGoals() }}</span>
                                <p class="font-poppins text-gray-600 text-sm mt-2">Buts marqués</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Teams Grid -->
                <div class="px-6 lg:px-20 py-12 bg-white">
                    <div class="max-w-6xl mx-auto">
                        <div *ngIf="filteredTeams.length > 0; else noResults" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div *ngFor="let team of filteredTeams" class="group cursor-pointer">
                                <div class="bg-gradient-to-br from-[#FFFDFA] to-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                                    <!-- Header with colors -->
                                    <div class="h-24 bg-gradient-to-r from-[#E28D98] to-[#EBA08B] relative overflow-hidden">
                                        <div class="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                                    </div>

                                    <!-- Logo/Badge Area -->
                                    <div class="px-6 -mt-12 mb-4 relative z-10">
                                        <div class="w-20 h-20 bg-white border-4 border-[#E28D98] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                            <div class="text-center">
                                                <img src="{{ team.logo }}" alt="{{ team.name }} Logo">
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Team Info -->
                                    <div class="px-6 flex-1 flex flex-col">
                                        <div class="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 class="text-xl font-bold text-gray-900 font-volkhov">{{ team.name }}</h3>
                                                <p class="text-sm text-[#E28D98] font-poppins font-semibold">{{ team.shortName }}</p>
                                            </div>
                                            <span class="text-2xl font-volkhov font-bold text-[#EBA08B]">#{{ team.position }}</span>
                                        </div>

                                        <div class="space-y-2 mb-4 text-sm font-poppins text-gray-600">
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-user text-[#E28D98]"></i>
                                                <span><strong>Entraîneur :</strong> {{ team.coach }}</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-building text-[#EBA08B]"></i>
                                                <span><strong>Président :</strong> {{ team.president }}</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-map-marker text-[#f5bbe2]"></i>
                                                <span><strong>Stade :</strong> {{ team.stadium }}</span>
                                            </div>
                                            <div class="flex items-center gap-2">
                                                <i class="pi pi-calendar text-gray-400"></i>
                                                <span><strong>Fondée :</strong> {{ team.founded }}</span>
                                            </div>
                                        </div>

                                        <p class="text-gray-700 text-sm mb-4 line-clamp-2">{{ team.description }}</p>

                                        <!-- Stats Grid -->
                                        <div class="grid grid-cols-3 gap-2 mb-4 p-3 bg-gray-50 rounded-lg">
                                            <div class="text-center">
                                                <span class="text-lg font-volkhov font-bold text-[#E28D98]">{{ team.points }}</span>
                                                <p class="text-xs text-gray-600 font-poppins">Points</p>
                                            </div>
                                            <div class="text-center border-l border-r border-gray-200">
                                                <span class="text-lg font-volkhov font-bold text-[#EBA08B]">{{ team.goalsFor }}</span>
                                                <p class="text-xs text-gray-600 font-poppins">Buts</p>
                                            </div>
                                            <div class="text-center">
                                                <span class="text-lg font-volkhov font-bold text-[#f5bbe2]">{{ team.matches }}</span>
                                                <p class="text-xs text-gray-600 font-poppins">Matchs</p>
                                            </div>
                                        </div>

                                        <!-- Performance -->
                                        <div class="flex items-center justify-between text-xs font-poppins mb-4 p-3 bg-blue-50 rounded-lg">
                                            <div class="text-center flex-1">
                                                <span class="block font-bold text-green-600">{{ team.wins }}</span>
                                                <span class="text-gray-600">V</span>
                                            </div>
                                            <div class="text-center flex-1 border-l border-r border-blue-200">
                                                <span class="block font-bold text-yellow-600">{{ team.draws }}</span>
                                                <span class="text-gray-600">N</span>
                                            </div>
                                            <div class="text-center flex-1">
                                                <span class="block font-bold text-red-600">{{ team.losses }}</span>
                                                <span class="text-gray-600">D</span>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Action Buttons -->
                                    <div class="px-6 pb-6 pt-0 flex gap-3">
                                        <button pButton pRipple type="button" [label]="'Profil complet'" class="flex-1 !text-sm !bg-[#E28D98] !border-none !font-poppins !rounded-lg hover:!bg-[#d67a85] transition-colors"></button>
                                        <button pButton pRipple type="button" icon="pi pi-arrow-right" class="!bg-gray-100 !text-gray-700 !border-none !p-3 hover:!bg-gray-200 transition-colors !rounded-lg"></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- No Results -->
                        <ng-template #noResults>
                            <div class="text-center py-12">
                                <i class="pi pi-search text-5xl text-gray-300 mb-4 block"></i>
                                <h3 class="text-xl font-volkhov font-bold text-gray-700 mb-2">Aucune équipe trouvée</h3>
                                <p class="font-poppins text-gray-600">Essayez une autre recherche</p>
                            </div>
                        </ng-template>
                    </div>
                </div>

                <!-- Standings Table
                <div class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class="max-w-6xl mx-auto">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#E28D98]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">Classement général</h2>
                        </div>

                        <div class="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-lg">
                            <div class="overflow-x-auto">
                                <table class="w-full">
                                    <thead>
                                        <tr class="bg-gradient-to-r from-[#E28D98] to-[#EBA08B] text-white">
                                            <th class="px-6 py-4 text-left font-volkhov font-bold">#</th>
                                            <th class="px-6 py-4 text-left font-volkhov font-bold">Équipe</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold">J</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold text-green-200">V</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold text-yellow-200">N</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold text-red-200">D</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold">BP</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold">BC</th>
                                            <th class="px-6 py-4 text-center font-volkhov font-bold">Diff</th>
                                            <th class="px-6 py-4 text-right font-volkhov font-bold">PTS</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr *ngFor="let team of teams; let i = index" [ngClass]="{ 'bg-[#f5bbe2] bg-opacity-10 border-l-4 border-[#E28D98]': i === 0, 'hover:bg-gray-50': i !== 0 }" class="border-b border-gray-200 transition-colors">
                                            <td class="px-6 py-4">
                                                <span class="font-volkhov font-bold text-lg text-[#E28D98]">{{ team.position }}</span>
                                            </td>
                                            <td class="px-6 py-4">
                                                <div class="flex items-center gap-3">
                                                    <div class="w-10 h-10 bg-gradient-to-br from-[#E28D98] to-[#EBA08B] rounded-full flex items-center justify-center text-white font-volkhov font-bold">
                                                        {{ team.shortName.charAt(0) }}
                                                    </div>
                                                    <div>
                                                        <p class="font-poppins font-bold text-gray-900">{{ team.name }}</p>
                                                        <p class="text-xs text-gray-500">{{ team.shortName }}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="px-6 py-4 text-center font-poppins font-semibold text-gray-700">{{ team.matches }}</td>
                                            <td class="px-6 py-4 text-center font-poppins font-bold text-green-600">{{ team.wins }}</td>
                                            <td class="px-6 py-4 text-center font-poppins font-bold text-yellow-600">{{ team.draws }}</td>
                                            <td class="px-6 py-4 text-center font-poppins font-bold text-red-600">{{ team.losses }}</td>
                                            <td class="px-6 py-4 text-center font-poppins font-semibold text-gray-700">{{ team.goalsFor }}</td>
                                            <td class="px-6 py-4 text-center font-poppins font-semibold text-gray-700">{{ team.goalsAgainst }}</td>
                                            <td
                                                class="px-6 py-4 text-center font-poppins font-semibold"
                                                [ngClass]="{ 'text-green-600': team.goalsFor - team.goalsAgainst > 0, 'text-red-600': team.goalsFor - team.goalsAgainst < 0, 'text-gray-600': team.goalsFor - team.goalsAgainst === 0 }"
                                            >
                                                {{ team.goalsFor - team.goalsAgainst > 0 ? '+' : '' }}{{ team.goalsFor - team.goalsAgainst }}
                                            </td>
                                            <td class="px-6 py-4 text-right">
                                                <span class="font-volkhov font-bold text-lg text-[#E28D98]">{{ team.points }}</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div> -->

                <!-- Join CTA -->
                <div class="px-6 lg:px-20 py-16 bg-gradient-to-r from-[#E28D98] to-[#EBA08B] relative overflow-hidden">
                    <div class="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 -translate-x-1/2"></div>
                    <div class="absolute bottom-0 right-0 w-48 h-48 bg-white opacity-10 rounded-full translate-y-1/2 translate-x-1/2"></div>

                    <div class="max-w-4xl mx-auto text-center relative z-10">
                        <h2 class="text-3xl md:text-4xl font-bold text-white font-volkhov mb-6">Votre équipe fait partie de Olibo ?</h2>
                        <p class="font-poppins text-white text-lg mb-8 opacity-90">Rejoignez notre écosystème dynamique et participez à la plus grande ligue amateur du Cameroun.</p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <button pButton pRipple type="button" label="Nous contacter" class="!bg-white !text-[#E28D98] !border-none !font-volkhov !rounded-full hover:!bg-gray-100 transition-colors !px-8"></button>
                            <button pButton pRipple type="button" label="En savoir plus" class="!bg-transparent !text-white !border !border-white !font-volkhov !rounded-full hover:!bg-white hover:!text-[#E28D98] transition-colors !px-8"></button>
                        </div>
                    </div>
                </div>
            </div>

            <footer-widget />
        </div>
    `
})
export class Teams implements OnInit {
    teams: Team[] = [];
    filteredTeams: Team[] = [];
    searchTerm: string = '';
    currentSort: string = 'name';

    ngOnInit() {
        this.initializeTeams();
        this.filterTeams();
    }

    initializeTeams() {
        this.teams = [
            {
                id: 1,
                name: 'Elite City',
                shortName: 'FFC',
                founded: 2015,
                coach: 'Loid Adiang',
                president: 'Loid Adiang',
                stadium: 'Stade Omnisports de Yaoundé',
                colors: '#E28D98 - #EBA08B',
                description: 'Fondatrice de la Olibo League, Friends FC est une équipe historique et emblématique.',
                logo: 'img/logosTeam/EliteCity.png',
                players: 25,
                matches: 16,
                wins: 12,
                draws: 2,
                losses: 2,
                goalsFor: 48,
                goalsAgainst: 15,
                points: 38,
                position: 1
            },
            {
                id: 2,
                name: 'Warriors FC',
                shortName: 'TUN',
                founded: 2018,
                coach: 'Samuel Mbarga',
                president: 'Eric Ndong',
                stadium: 'Complexe Sportif Mvondo',
                colors: '#1E40AF - #F59E0B',
                description: 'Équipe dynamique connue pour son jeu offensif et son ambiance de groupe exceptionnelle.',
                logo: 'img/logosTeam/WARRIORSFC.png',
                players: 23,
                matches: 16,
                wins: 10,
                draws: 3,
                losses: 3,
                goalsFor: 42,
                goalsAgainst: 22,
                points: 33,
                position: 2
            },
            {
                id: 3,
                name: 'Soccer Dream',
                shortName: 'LDV',
                founded: 2017,
                coach: 'Pierre Tchoumeni',
                president: 'Armand Owondo',
                stadium: 'Stade Elig-Essono',
                colors: '#DC2626 - #FBBF24',
                description: 'Défenseurs robustes et organisés, les Lions dominent en solidité tactique.',
                logo: 'img/logosTeam/SoccerDream.png',
                players: 24,
                matches: 16,
                wins: 9,
                draws: 4,
                losses: 3,
                goalsFor: 35,
                goalsAgainst: 18,
                points: 31,
                position: 3
            },
            {
                id: 4,
                name: 'Roublards',
                shortName: 'PHX',
                founded: 2019,
                coach: 'Marcel Sone',
                president: 'Jean-Claude Tonga',
                stadium: "Complexe Sportif d'Etoudi",
                colors: '#DC2626 - #FCA5A5',
                description: 'Jeune équipe avec une philosophie de jeu attractive et moderne.',
                logo: 'img/logosTeam/Roublards.png',
                players: 22,
                matches: 16,
                wins: 8,
                draws: 4,
                losses: 4,
                goalsFor: 38,
                goalsAgainst: 25,
                points: 28,
                position: 4
            },
            {
                id: 5,
                name: 'Real de Madrid 237',
                shortName: 'EDC',
                founded: 2016,
                coach: 'Hervé Kuate',
                president: 'Dominique Nfor',
                stadium: 'Stade de Mendong',
                colors: '#059669 - #A7F3D0',
                description: "Représentants fiers de l'esprit camerounais, une équipe à cœur passionné.",
                logo: 'img/logosTeam/realmadrid237.png',
                players: 21,
                matches: 16,
                wins: 7,
                draws: 3,
                losses: 6,
                goalsFor: 32,
                goalsAgainst: 28,
                points: 24,
                position: 5
            },
            {
                id: 6,
                name: 'Melange',
                shortName: 'DRY',
                founded: 2014,
                coach: 'Antoine Botama',
                president: 'Roger Engo',
                stadium: 'Complexe Sportif de Bastos',
                colors: '#7C3AED - #DDD6FE',
                description: 'Équipe expérimentée avec une base solide et une longue histoire dans la ligue.',
                logo: 'img/logosTeam/Melange.png',
                players: 23,
                matches: 16,
                wins: 6,
                draws: 5,
                losses: 5,
                goalsFor: 28,
                goalsAgainst: 26,
                points: 23,
                position: 6
            },
            {
                id: 7,
                name: 'Joga',
                shortName: 'VEL',
                founded: 2020,
                coach: 'Sylvain Ngando',
                president: 'Celestin Asah',
                stadium: 'Stade du Projet',
                colors: '#0369A1 - #06B6D4',
                description: 'Nouvelle venue avec des ambitions grandes et une énergie contagieuse.',
                logo: 'img/logosTeam/joga.png',
                players: 20,
                matches: 16,
                wins: 5,
                draws: 4,
                losses: 7,
                goalsFor: 24,
                goalsAgainst: 31,
                points: 19,
                position: 7
            },
            {
                id: 8,
                name: 'FFC',
                shortName: 'BLP',
                founded: 2018,
                coach: 'Raoul Nzomo',
                president: 'Firmin Ewondo',
                stadium: 'Stade Annexe Yaoundé',
                colors: '#000000 - #F59E0B',
                description: 'Équipe athlétique et technique, connue pour son football rapide et combinatif.',
                logo: 'img/logosTeam/FFC.png',
                players: 22,
                matches: 16,
                wins: 5,
                draws: 2,
                losses: 9,
                goalsFor: 26,
                goalsAgainst: 36,
                points: 17,
                position: 8
            },
            {
                id: 9,
                name: 'English Twitter',
                shortName: 'VIC',
                founded: 2019,
                coach: 'Ange Messi',
                president: 'Victor Ayuk',
                stadium: 'Stade de Ngousso',
                colors: '#DC2626 - #FBE9E9',
                description: "Équipe jeune et ambitieuse, construite pour l'avenir avec des talents prometteurs.",
                logo: 'img/logosTeam/Englistwitter.png',
                players: 19,
                matches: 16,
                wins: 4,
                draws: 2,
                losses: 10,
                goalsFor: 20,
                goalsAgainst: 40,
                points: 14,
                position: 9
            }
        ];

        // Sort by points (descending)
        this.teams.sort((a, b) => b.points - a.points);
        this.teams.forEach((team, index) => {
            team.position = index + 1;
        });
    }

    filterTeams() {
        this.filteredTeams = this.teams.filter(
            (team) => team.name.toLowerCase().includes(this.searchTerm.toLowerCase()) || team.shortName.toLowerCase().includes(this.searchTerm.toLowerCase()) || team.coach.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
        this.sortTeams();
    }

    sortBy(criterion: string) {
        this.currentSort = criterion;
        this.sortTeams();
    }

    sortTeams() {
        if (this.currentSort === 'name') {
            this.filteredTeams.sort((a, b) => a.name.localeCompare(b.name));
        } else if (this.currentSort === 'points') {
            this.filteredTeams.sort((a, b) => b.points - a.points);
        }
    }

    getTotalPlayers(): number {
        return this.teams.reduce((sum, team) => sum + team.players, 0);
    }

    getTotalMatches(): number {
        return this.teams[0]?.matches || 0;
    }

    getTotalGoals(): number {
        return this.teams.reduce((sum, team) => sum + team.goalsFor, 0);
    }
}
