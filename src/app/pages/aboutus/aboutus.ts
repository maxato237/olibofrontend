import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FooterWidget } from '../../layout/component/footerwidget';
import { HeroWidget } from '../aboutus/components/HeroWidget';
import { TopbarWidget } from '../../layout/component/topbarwidget.component';

@Component({
    selector: 'app-aboutus',
    imports: [RouterModule, TopbarWidget, HeroWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule],
    template: `
        <div class="!bg-[#fdfcfa] dark:bg-surface-900 pb-4">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-8 px-2 mx-0 md:mx-12 lg:px-20 flex items-center justify-between absolute  z-50 bg-transparent w-[95vw]" />
                <div>
                    <hero-widget class="pt-10" />
                </div>
            </div>

            <!-- Section Présentation / Mission -->
            <div class="bg-[#FFFDFA] py-16 px-6 lg:px-20">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col lg:flex-row gap-12 items-center">
                        <div class="w-full lg:w-1/2">
                            <span class="font-poppins text-gray-500 text-sm md:text-lg font-bold">NOTRE MISSION</span>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-volkhov mt-2 mb-6">
                                Une passion qui <br />
                                <span class="text-[#EBA08B]">rassemble et fédère</span>
                            </h2>
                            <p class="font-poppins text-gray-700 text-base leading-relaxed text-justify mb-4">
                                La Olibo League est un championnat de football amateur né d'une ambition simple mais forte : rassembler les Camerounais autour d'une passion commune, saine et fédératrice.
                            </p>
                            <p class="font-poppins text-gray-700 text-base leading-relaxed text-justify">
                                Organisée à Yaoundé, la Olibo League s'est imposée au fil des saisons comme bien plus qu'une compétition sportive. Elle est une plateforme de rencontre, de partage et d'expression, où le football devient un levier de
                                cohésion sociale, de citoyenneté et de divertissement responsable.
                            </p>
                        </div>
                        <div class="w-full lg:w-1/2 relative">
                            <img src="img/celebration.png" alt="Match Olibo League" />
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section Valeurs -->
            <div class="py-16 px-6 lg:px-20 bg-surface-0 dark:bg-surface-900">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center pb-12">
                        <h5 class="font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4">NOS FONDEMENTS</h5>
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 font-volkhov">Nos valeurs essentielles</div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        <!-- Valeur 1 : Respect -->
                        <div class="shadow-lg rounded-xl p-6 bg-white text-center hover:shadow-xl transition-shadow duration-300">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5bbe2] flex items-center justify-center">
                                <i class="pi pi-heart text-2xl text-gray-800"></i>
                            </div>
                            <h3 class="text-xl font-volkhov font-bold text-gray-900 mb-2">Respect</h3>
                            <p class="font-poppins text-sm text-gray-600">Le respect mutuel entre joueurs, équipes et arbitres est au cœur de notre compétition.</p>
                        </div>

                        <!-- Valeur 2 : Vivre-ensemble -->
                        <div class="shadow-lg rounded-xl p-6 bg-white text-center hover:shadow-xl transition-shadow duration-300">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#EBA08B] flex items-center justify-center">
                                <i class="pi pi-users text-2xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-volkhov font-bold text-gray-900 mb-2">Vivre-ensemble</h3>
                            <p class="font-poppins text-sm text-gray-600">Une communauté unie où chacun trouve sa place et contribue à l'harmonie collective.</p>
                        </div>

                        <!-- Valeur 3 : Exemplarité -->
                        <div class="shadow-lg rounded-xl p-6 bg-white text-center hover:shadow-xl transition-shadow duration-300">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#E28D98] flex items-center justify-center">
                                <i class="pi pi-star text-2xl text-white"></i>
                            </div>
                            <h3 class="text-xl font-volkhov font-bold text-gray-900 mb-2">Exemplarité</h3>
                            <p class="font-poppins text-sm text-gray-600">Chaque acteur incarne les standards élevés de fair-play et d'intégrité.</p>
                        </div>

                        <!-- Valeur 4 : Discipline -->
                        <div class="shadow-lg rounded-xl p-6 bg-white text-center hover:shadow-xl transition-shadow duration-300">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f8addf] flex items-center justify-center">
                                <i class="pi pi-check-circle text-2xl text-gray-800"></i>
                            </div>
                            <h3 class="text-xl font-volkhov font-bold text-gray-900 mb-2">Discipline</h3>
                            <p class="font-poppins text-sm text-gray-600">Rigueur et professionnalisme dans l'organisation et la pratique sportive.</p>
                        </div>

                        <!-- Valeur 5 : Engagement -->
                        <div class="shadow-lg rounded-xl p-6 bg-white text-center hover:shadow-xl transition-shadow duration-300">
                            <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-[#f5bbe2] flex items-center justify-center">
                                <i class="pi pi-flag text-2xl text-gray-800"></i>
                            </div>
                            <h3 class="text-xl font-volkhov font-bold text-gray-900 mb-2">Engagement</h3>
                            <p class="font-poppins text-sm text-gray-600">Un dévouement total pour faire grandir le football amateur camerounais.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section 2-0 / Football Patrimoine -->
            <div class="bg-[#FFFDFA] py-16 px-6 lg:px-20">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col lg:flex-row-reverse gap-12 items-center">
                        <div class="w-full lg:w-1/2">
                            <span class="font-poppins text-[#EBA08B] text-sm md:text-lg font-bold">NOTRE HÉRITAGE</span>
                            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-volkhov mt-2 mb-6">
                                Le <span class="text-[#E28D98]">2-0</span> :<br />
                                Notre football patrimoine
                            </h2>
                            <p class="font-poppins text-gray-700 text-base leading-relaxed text-justify mb-4">
                                Un pilier essentiel de la Olibo League est la mise en valeur de notre football patrimoine, ce que nous appelons affectueusement le <strong class="text-[#EBA08B]">« 2-0 »</strong>.
                            </p>
                            <p class="font-poppins text-gray-700 text-base leading-relaxed text-justify mb-4">
                                Plus qu'un score, le 2-0 symbolise un football authentique, populaire et enraciné dans notre culture : celui des quartiers, des terrains sablonneux, de la passion brute et du spectacle spontané.
                            </p>
                            <p class="font-poppins text-gray-700 text-base leading-relaxed text-justify">Olibo s'engage à préserver et à moderniser cet héritage, en lui offrant un cadre structuré et respectueux.</p>
                        </div>
                        <div class="w-full lg:w-1/2 relative">
                            <img src="img/2.0.png" alt="Football 2-0" />
                            <div class="absolute -top-6 -right-6 w-24 h-24 bg-[#f5bbe2] rounded-full flex items-center justify-center shadow-lg">
                                <span class="font-volkhov text-3xl font-bold text-gray-800">2-0</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section Vision / Développement Durable -->
            <div class="py-16 px-6 lg:px-20 bg-surface-0 dark:bg-surface-900">
                <div class="max-w-7xl mx-auto">
                    <div class="text-center pb-12">
                        <h5 class="font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4">NOTRE VISION</h5>
                        <div class="text-3xl md:text-4xl font-bold text-gray-900 font-volkhov">Développement durable du football amateur</div>
                    </div>

                    <div class="card shadow-xl !rounded-3xl p-8 md:p-12 bg-white">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="flex gap-4 items-start">
                                <div class="pt-1">
                                    <img class="w-10 md:w-12" src="icon/yellow.png" alt="icône" />
                                </div>
                                <div>
                                    <span class="text-lg md:text-xl font-bold text-gray-800 font-poppins">Professionnalisation</span>
                                    <p class="text-justify w-full text-gray-600 text-base font-poppins mt-2">Nous œuvrons à professionnaliser les pratiques du football amateur pour offrir une expérience de qualité à tous les acteurs.</p>
                                </div>
                            </div>

                            <div class="flex gap-4 items-start">
                                <div class="pt-1">
                                    <img class="w-10 md:w-12" src="icon/red.png" alt="icône" />
                                </div>
                                <div>
                                    <span class="text-lg md:text-xl font-bold text-gray-800 font-poppins">Valorisation des talents</span>
                                    <p class="text-justify w-full text-gray-600 text-base font-poppins mt-2">Identifier, accompagner et mettre en lumière les jeunes talents du football camerounais.</p>
                                </div>
                            </div>

                            <div class="flex gap-4 items-start">
                                <div class="pt-1">
                                    <img class="w-10 md:w-12" src="icon/indigo.png" alt="icône" />
                                </div>
                                <div>
                                    <span class="text-lg md:text-xl font-bold text-gray-800 font-poppins">Environnement économique viable</span>
                                    <p class="text-justify w-full text-gray-600 text-base font-poppins mt-2">Créer un écosystème économique durable qui soutient le développement de la ligue et de ses partenaires.</p>
                                </div>
                            </div>

                            <div class="flex gap-4 items-start">
                                <div class="pt-1">
                                    <img class="w-10 md:w-12" src="icon/yellow.png" alt="icône" />
                                </div>
                                <div>
                                    <span class="text-lg md:text-xl font-bold text-gray-800 font-poppins">Expérience événementielle</span>
                                    <p class="text-justify w-full text-gray-600 text-base font-poppins mt-2">Offrir une expérience sportive et événementielle de qualité aux joueurs comme au public.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Section Ambition / CTA -->
            <div class="bg-[#FFFDFA] py-20 px-6 lg:px-20 relative overflow-hidden">
                <div class="absolute top-0 right-0 w-64 h-64 bg-[#f5bbe2] rounded-full opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div class="absolute bottom-0 left-0 w-48 h-48 bg-[#EBA08B] rounded-full opacity-20 translate-y-1/2 -translate-x-1/2"></div>

                <div class="max-w-4xl mx-auto text-center relative z-10">
                    <span class="font-poppins text-[#EBA08B] text-sm md:text-lg font-bold">NOTRE AMBITION</span>
                    <h2 class="text-3xl md:text-5xl font-bold text-gray-900 font-volkhov mt-4 mb-8">Le rendez-vous incontournable du football amateur au Cameroun</h2>
                    <p class="font-poppins text-gray-700 text-lg leading-relaxed mb-8">
                        Notre ambition est claire : faire de la Olibo League, dans les années à venir, un véritable vivier de talents et un socle solide pour le développement du football professionnel national.
                    </p>
                    <p class="font-poppins text-[#E28D98] text-xl md:text-2xl font-volkhov font-bold italic">« La Olibo League, c'est le football que nous aimons : celui qui rassemble, qui inspire et qui honore notre patrimoine. »</p>
                    <div class="mt-10">
                        <button pButton pRipple type="button" label="Rejoindre la communauté" class="!text-lg !px-8 !bg-[#E28D98] !border !border-[#f5bbe2] !font-volkhov !rounded-full hover:!bg-[#d67a85] transition-colors"></button>
                    </div>
                </div>
            </div>

            <!-- Section Chiffres Clés (réutilisation du style existant) -->
            <div class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
                <div class="text-center pb-12">
                    <h5 class="font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4">NOTRE IMPACT</h5>
                    <div class="text-3xl md:text-3xl font-bold text-gray-900 font-volkhov">Olibo League en chiffres</div>
                </div>
                <div class="card shadow-xl mt-8 px-4 py-8 !rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 bg-white">
                    <div class="flex flex-col items-center text-center gap-3">
                        <span class="text-4xl font-volkhov font-bold text-[#EBA08B]">2019</span>
                        <span class="font-poppins text-gray-800 text-base font-bold">Année de création</span>
                        <p class="font-poppins max-w-xs text-gray-600">Née à Yaoundé, fondée par Loid Adiang du Friends FC.</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <span class="text-4xl font-volkhov font-bold text-[#E28D98]">+500</span>
                        <span class="font-poppins text-gray-800 text-base font-bold">Participants</span>
                        <p class="font-poppins max-w-xs text-gray-600">Chaque saison, plus de personnes rejoignent la famille Olibo.</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <span class="text-4xl font-volkhov font-bold text-[#EBA08B]">09</span>
                        <span class="font-poppins text-gray-800 text-base font-bold">Équipes</span>
                        <p class="font-poppins max-w-xs text-gray-600">Un écosystème riche d'équipes motivées et compétitives.</p>
                    </div>
                    <div class="flex flex-col items-center text-center gap-3">
                        <span class="text-4xl font-volkhov font-bold text-[#E28D98]">04</span>
                        <span class="font-poppins text-gray-800 text-base font-bold">Saisons</span>
                        <p class="font-poppins max-w-xs text-gray-600">Des saisons riches en émotions et en moments mémorables.</p>
                    </div>
                </div>
            </div>
        </div>
        <footer-widget />
    `
})
export class Aboutus {}
