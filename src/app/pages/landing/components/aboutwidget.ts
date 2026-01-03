import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'about-widget',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div class="flex flex-col md:flex-row gap-1 lg:gap-16 max-w-7xl mx-auto px-6 md:px-12 py-8 items-start md:items-center">
                <div class="w-full md:w-1/2 lg:w-[40%]">
                    <span class=" font-poppins text-gray-500 text-sm md:text-lg font-bold">Qui sommes nous ?</span>
                    <h1 class="text-3xl md:text-3xl font-bold text-gray-900 font-volkhov">Ligue de football <br />Amateur</h1>
                    <div class="flex gap-4 mt-8 items-start">
                        <div class="pt-1"><img class="w-8 md:w-10" src="icon/yellow.png" /></div>
                        <div class="">
                            <span class="text-lg md:text-xl font-bold text-gray-600 font-poppins">Origine</span>
                            <p class=" text-justify w-full text-gray-500 text-base font-poppins">Née en 2019 à Yaoundé, l’Olibo League est la première ligue de football amateur du Cameroun, fondée par Loid Adiang du Friends FC.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-8 items-start">
                        <div class="pt-1"><img class="w-8 md:w-10" src="icon/red.png" alt="" /></div>
                        <div class="">
                            <span class="text-lg md:text-xl font-bold text-gray-600 font-poppins">Esprit 2-0</span>
                            <p class=" text-justify w-full text-gray-500 text-base font-poppins">Appelée « la 2-0 », la League symbolise la passion, la rivalité saine et la fraternité qui animent chaque rencontre.</p>
                        </div>
                    </div>
                    <div class="flex gap-4 mt-8 items-start">
                        <div class="pt-1"><img class="w-8 md:w-10" src="icon/indigo.png" alt="" /></div>
                        <div class="">
                            <span class="text-lg md:text-xl font-bold text-gray-600 font-poppins">La Fête du Football</span>
                            <p class="text-justify w-full text-gray-500 text-base font-poppins">Plus qu’un championnat, l’Olibo League est un rassemblement hebdomadaire où sport, ambiance et communauté ne font qu’un.</p>
                        </div>
                    </div>
                </div>
                <div class="hidden md:block lg:block relative px-[5em] md:px-4 md:top-12">
                    <img class="w-full max-w-xl lg:max-w-2xl" src="img/history.png" />
                    <img
                        src="icon/points.png"
                        class="absolute top-[15%] right-[5%] w-16 md:w-20 lg:w-28 opacity-80 pointer-events-none"
                    />
                </div>
            </div>
        </div>
    `
})
export class AboutWidget {}
