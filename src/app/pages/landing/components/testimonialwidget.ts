import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'testimonial-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div class="text-center pb-12 pt-[2em] bg-[#FFFDFA] px-4 sm:px-8 lg:px-12">
            <h5 class="font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4 pt-4">Qu’est-ce qu’ils disent de nous ?</h5>
            <div class="text-3xl font-bold text-gray-900 font-volkhov mb-12">Les témoignages</div>
            <div
                class="flex gap-6 overflow-x-auto pb-8 px-2
                snap-x snap-mandatory scroll-smooth"
            >
                <div
                    class="shadow-lg snap-start shrink-0
                    w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%]
                    text-left flex gap-6 rounded-xl p-6 mt-4 bg-white"
                >
                    <div class="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[13rem] rounded-xl overflow-hidden flex-shrink-0">
                        <img src="img/temoin1.png" class="w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-volkhov font-bold text-[#EBA08B]">NGUIMBI Junior</h3>
                        <span class="text-gray-900 font-bold font-poppins"> Joueur </span>
                        <p class="pt-2 text-justify font-poppins text-sm sm:text-base">Olibo League nous a offert un cadre sérieux pour jouer au football sans désordre. Les matchs sont bien organisés.</p>
                    </div>
                </div>

                <div
                    class="shadow-lg snap-start shrink-0
                    w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%]
                    text-left flex gap-6 rounded-xl p-6 mt-4 bg-white"
                >
                    <div class="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[13rem] rounded-xl overflow-hidden flex-shrink-0">
                        <img src="img/temoin2.png" class="w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-volkhov font-bold text-[#EBA08B]">ESSOMBA Patrick</h3>
                        <span class="text-gray-900 font-bold font-poppins"> Participant </span>
                        <p class="pt-2 text-justify font-poppins text-sm sm:text-base">Cette ligue met en valeur les jeunes talents de Yaoundé. On sent une vraie vision à long terme.</p>
                    </div>
                </div>

                <!-- Carte -->
                <div
                    class="shadow-lg snap-start shrink-0
                    w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%]
                    text-left flex gap-6 rounded-xl p-6 mt-4 bg-white"
                >
                    <div class="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[13rem] rounded-xl overflow-hidden flex-shrink-0">
                        <img src="img/temoin3.png" class="w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-volkhov font-bold text-[#EBA08B]">MINKO David</h3>
                        <span class="text-gray-900 font-bold font-poppins"> Spectateur </span>
                        <p class="pt-2 text-justify font-poppins text-sm sm:text-base">Les matchs sont compétitifs et bien arbitrés. Olibo League a redonné vie au football de quartier.</p>
                    </div>
                </div>

                <!-- Carte -->
                <div
                    class="shadow-lg snap-start shrink-0
                    w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%]
                    text-left flex gap-6 rounded-xl p-6 mt-4 bg-white"
                >
                    <div class="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[13rem] rounded-xl overflow-hidden flex-shrink-0">
                        <img src="img/temoin4.png" class="w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-volkhov font-bold text-[#EBA08B]">FOTSO Alain</h3>
                        <span class="text-gray-900 font-bold font-poppins"> Capitaine d’équipe </span>
                        <p class="pt-2 text-justify font-poppins text-sm sm:text-base">Grâce à Olibo League, nos équipes jouent dans un cadre structuré et respecté.</p>
                    </div>
                </div>

                <!-- Carte -->
                <div
                    class="shadow-lg snap-start shrink-0
                    w-[85%] sm:w-[70%] md:w-[45%] lg:w-[35%]
                    text-left flex gap-6 rounded-xl p-6 mt-4 bg-white"
                >
                    <div class="w-[8rem] h-[10rem] sm:w-[10rem] sm:h-[13rem] rounded-xl overflow-hidden flex-shrink-0">
                        <img src="img/temoin5.png" class="w-full h-full object-cover" />
                    </div>

                    <div>
                        <h3 class="text-xl sm:text-2xl font-volkhov font-bold text-[#EBA08B]">ABENA Serge</h3>
                        <span class="text-gray-900 font-bold font-poppins"> Supporter </span>
                        <p class="pt-2 font-poppins text-sm sm:text-base text-justify">Chaque week-end devient un vrai moment de spectacle.L’organisation est sérieuse.</p>
                    </div>
                </div>
            </div>
        </div>
    `
})
export class TestimonialWidget {}
