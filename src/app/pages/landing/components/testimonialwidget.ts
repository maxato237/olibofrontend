import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'testimonial-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: ` <div class="text-center pb-12 pt-[2em] bg-[#FFFDFA] px-12">
        <h5 class=" font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4 pt-4">Qu'est ce qu'ils disent de nous ?</h5>
        <div class="text-3xl md:text-3xl font-bold text-gray-900 font-volkhov mb-12">Les témoignages</div>
        <div class="flex gap-10 overflow-x-auto pb-8 px-2">
            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin1.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">NGUIMBI Junior</h3>
                    <span class="text-gray-900 font-bold font-poppins">Joueur</span>
                    <p class="pt-2 text-justify font-poppins">Olibo League nous a offert un cadre sérieux pour jouer au football sans désordre. Les matchs sont bien organisés et l’ambiance est très professionnelle.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin2.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">ESSOMBA Patrick</h3>
                    <span class="text-gray-900 font-bold font-poppins">Participant</span>
                    <p class="pt-2 text-justify font-poppins">Cette ligue met en valeur les jeunes talents de Yaoundé. On sent une vraie vision à long terme pour le football amateur.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin3.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">MINKO David</h3>
                    <span class="text-gray-900 font-bold font-poppins">Spectateur</span>
                    <p class="pt-2 text-justify font-poppins">Les matchs sont bien arbitrés et très compétitifs. Olibo League a redonné vie au football de quartier.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin4.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">FOTSO Alain</h3>
                    <span class="text-gray-900 font-bold font-poppins">Capitaine d’équipe</span>
                    <p class="pt-2 text-justify font-poppins">Grâce à Olibo, nos équipes jouent dans un cadre structuré. C’est une opportunité rare pour les jeunes footballeurs locaux.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin5.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">ABENA Serge</h3>
                    <span class="text-gray-900 font-bold font-poppins">Supporter</span>
                    <p class="pt-2 text-justify font-poppins">Olibo League rassemble les passionnés de football à Yaoundé. Chaque week-end devient un vrai moment de spectacle.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin6.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">TCHUENTE Michel</h3>
                    <span class="text-gray-900 font-bold font-poppins">Organisateur local</span>
                    <p class="pt-2 text-justify font-poppins">La ligue apporte une vraie discipline dans le football amateur. Tout est clair : calendrier, règles, classements.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin7.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">EKANI Wilfried</h3>
                    <span class="text-gray-900 font-bold font-poppins">Joueur amateur</span>
                    <p class="pt-2 text-justify font-poppins">Jouer à Olibo League m’a permis de progresser et de me faire remarquer. C’est une vraie vitrine pour les jeunes.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin8.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">MEFOU Claude</h3>
                    <span class="text-gray-900 font-bold font-poppins">Spectateur régulier</span>
                    <p class="pt-2 text-justify font-poppins">L’organisation est propre et les matchs sont intenses. Olibo League fait du bon travail à Yaoundé.</p>
                </div>
            </div>

            <div class="shadow-lg shrink-0 text-left w-[35%] flex gap-6 rounded-xl p-6 mt-8 bg-white">
                <div class="w-[38%] rounded-xl overflow-hidden flex-shrink-0">
                    <img src="img/temoin9.png" class="w-full h-full object-cover" />
                </div>
                <div>
                    <h3 class="text-2xl font-volkhov font-bold text-[#EBA08B]">NDOUMBE Arnaud</h3>
                    <span class="text-gray-900 font-bold font-poppins">Participant</span>
                    <p class="pt-2 text-justify font-poppins">Olibo League structure le football de rue et le transforme en compétition sérieuse. C’est exactement ce qu’il manquait.</p>
                </div>
            </div>
        </div>
    </div>`
})
export class TestimonialWidget {}
