import { Component } from "@angular/core";
import { ButtonModule } from "primeng/button";
import { RippleModule } from "primeng/ripple";

@Component({
    selector: 'hero-widget',
    imports: [ButtonModule, RippleModule],
    template: `
        <div id="hero" class="pt-[8em] px-0 lg:px-0 overflow-hidden bg-[url('/img/Decore.png')] bg-no-repeat bg-cover bg-center relative flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between">
            <div class="mx-20 md:mx-[5em] lg:mx-[8em] mt-0 md:mt-24 w-[90vw]">
                <span class=" font-poppins text-[#EBA08B] text-sm md:text-lg font-bold">DÉCOUVREZ NOTRE HISTOIRE</span>
                <h1 class="w-[90vw] md:w-[55vw] lg:w-[45vw] text-4xl md:text-6xl font-bold text-gray-900 leading-tight font-volkhov pb-[12%] lg:pb-[16%] ">
                    À propos de <br />
                    <span class="relative inline-block mt-4">
                        d’Olibo League
                        <span class="absolute left-12 -bottom-5 w-full h-3 md:h-4 bg-[url('/img/underline.png')] bg-no-repeat bg-contain"></span>
                    </span>
                </h1>
        </div>
    `
})
export class HeroWidget {}