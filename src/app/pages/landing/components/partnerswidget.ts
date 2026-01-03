import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';

@Component({
    selector: 'partners-widget',
    imports: [DividerModule, ButtonModule, RippleModule],
    template: `
        <div id="partners" class="py-6 px-6 lg:px-20 my-16 bg-[#FFFDFA] dark:bg-gray-800">
            <div class="overflow-hidden max-w-7xl mx-auto">
                <!-- Bande défilante -->
                <div
                    class="flex items-center gap-12 w-max animate-marquee hover:[animation-play-state:paused]"
                >
                    
                    <div class="flex items-center gap-12">
                        <img src="partenaires/Safvis.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Safvis" />
                        <img src="partenaires/Archimaid.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Archimaid" />
                        <img src="partenaires/Cak_tries.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Cak tries" />
                        <img src="partenaires/ICMA.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="ICMA" />
                        <img src="partenaires/Kova6.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Kova6" />
                        <img src="partenaires/La_Godasserie.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="La Godasserie" />
                        <img src="partenaires/M._Le_Peintre.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="M. Le Peintre" />
                        <img src="partenaires/Ndamba.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Ndamba" />
                        <img src="partenaires/NOIR_A_PART.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="Noir à part" />
                        <img src="partenaires/PF237_PNG.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="PF237" />
                    </div>

                    <!-- LISTE 2 (DUPLICATION OBLIGATOIRE POUR L'EFFET INFINI) -->
                    <div class="flex items-center gap-12">
                        <img src="partenaires/Safvis.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/Archimaid.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/Cak_tries.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/ICMA.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/Kova6.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/La_Godasserie.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/M._Le_Peintre.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/Ndamba.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/NOIR_A_PART.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                        <img src="partenaires/PF237_PNG.png" class="h-12 md:h-14 lg:h-16 object-contain" alt="" />
                    </div>
                </div>
            </div>
        </div>
    `
})
export class PartnersWidget {}
