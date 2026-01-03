import { Component } from '@angular/core';

@Component({
    selector: 'statistic-widget',
    template: `
        <div id="highlights" class="py-6 px-6 lg:px-20 mx-0 my-12 lg:mx-20">
            <div class="text-center pb-12">
                <h5 class=" font-poppins text-gray-500 text-sm md:text-lg font-bold mb-4">Quels sont les chiffres ?</h5>
                <div class="text-3xl md:text-3xl font-bold text-gray-900 font-volkhov">Aperçu statistique sur olibo</div>
            </div>
            <div
                class="card shadow-xl mt-8 px-4 py-8 !rounded-3xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
                <div class="flex flex-col items-center text-center gap-3">
                    <span class="text-4xl font-volkhov font-bold text-gray-500">+ 500</span>
                    <span class="font-poppins text-gray-800 text-base font-bold"> Participants </span>
                    <p class="font-poppins max-w-xs text-gray-800">Chaque saison plus de personnes croient en nous et agrandissent la famille.</p>
                </div>
                <div class="flex flex-col items-center text-center gap-3">
                    <span class="text-4xl font-volkhov font-bold text-gray-500">09</span>
                    <span class="font-poppins text-gray-800 text-base font-bold "> Equipes </span>
                    <p class=" font-poppins max-w-xs text-gray-800">L’écosystème d’Olibo riche de ses équipes motivées nourrit notre soif d’élever Olibo encore plus loin.</p>
                </div>
                <div class="flex flex-col items-center text-center gap-3">
                    <span class="text-4xl font-volkhov font-bold text-gray-500">+ 500</span>
                    <span class="font-poppins text-gray-800 text-base font-bold"> Matchs </span>
                    <p class="font-poppins max-w-xs text-gray-800">Une histoire écrite à travers des matchs uniques, chacun animant merveilleusement nos week-ends.</p>
                </div>
                <div class="flex flex-col items-center text-center gap-3">
                    <span class="text-4xl font-volkhov font-bold text-gray-500">04</span>
                    <span class="font-poppins text-gray-800 text-base font-bold "> Saisons </span>
                    <p class="font-poppins max-w-xs text-gray-800">Une série de saisons bien écrites, riches en émotions, en rivalités et en moments mémorables.</p>
                </div>
            </div>
        </div>
    `
})
export class statisticWidget {}
