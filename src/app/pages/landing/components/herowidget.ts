import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    template: `
        <div id="hero" class="pt-[8em] px-0 lg:px-0 overflow-hidden bg-[url('/img/Decore.png')] bg-no-repeat bg-cover bg-center relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            <div class="mx-20 md:mx-[5em] lg:mx-[8em] mt-0 md:mt-6 w-[90vw]">
                <span class=" font-poppins text-[#EBA08B] text-sm md:text-lg font-bold">MEILLEURE LIGUE AMATEUR DU CAMEROUN</span>
                <h1 class="w-[90vw] md:w-[55vw] lg:w-[45vw] text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-volkhov">
                    Joue, brille et fais <br />
                    vibrer les terrains
                    <span class="relative inline-block">
                        d’Olibo League
                        <span class="absolute left-12 -bottom-5 w-full h-3 md:h-4 bg-[url('/img/underline.png')] bg-no-repeat bg-contain"></span>
                    </span>
                </h1>

                <p class=" pt-5 w-[60vw] md:w-[30vw]  font-normal text-sm md:text-base leading-normal md:mt-4 text-gray-700 font-poppins">
                    Construis ta légende match après match. <br />
                    Inscris ton équipe, suis les résultats en direct et rejoins la communauté du football amateur la plus compétitive du pays.
                </p>
                <button pButton pRipple type="button" label="Découvrir la ligue" class="!text-lg mt-8 !px-4 !bg-[#E28D98] !border !border-[#f5bbe2] !font-volkhov "></button>
            </div>
        </div>
    `
})
export class HeroWidget {}
