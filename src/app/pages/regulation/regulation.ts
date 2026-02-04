import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { FooterWidget } from '../../layout/component/footerwidget';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'app-regulations',
    standalone: true,
    imports: [RouterModule,FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule, AccordionModule],
    template: `
        <div class="!bg-[#fdfcfa] dark:bg-surface-900 pb-4">
            <div id="home" class="landing-wrapper overflow-hidden">
                <!-- Hero Section -->
                <div class="pt-[8em] px-6 lg:px-20 bg-gradient-to-b bg-[#FFFDFA] from-[#FFFDFA] to-white pb-12">
                    <div class="bg-[#FFFDFA] ">
                        <span class="font-poppins text-gray-500 text-xs md:text-sm font-semibold tracking-wider uppercase">Règlementation</span>
                        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 font-volkhov mt-4 mb-6">Règlements & Normes</h1>
                        <p class="font-poppins text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl">
                            Tous les règlements et dispositions formelles qui régissent la Olibo League. Ces normes garantissent l'équité, la sécurité et l'intégrité sportive de notre compétition.
                        </p>
                        <div class="mt-8 p-4 bg-[#f5bbe2] bg-opacity-15 border border-[#E28D98] rounded-lg">
                            <p class="font-poppins text-sm text-gray-700">
                                <strong>Dernière mise à jour :</strong> Saison 2024-2025 |
                                <a href="#download" class="text-[#E28D98] font-semibold hover:underline">Télécharger le document complet (PDF)</a>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Table of Contents -->
                <div class="px-6 lg:px-20 py-12 bg-white">
                    <div class=" ">
                        <div class="bg-gray-50 rounded-lg p-8 border border-gray-200">
                            <h2 class="text-xl font-bold text-gray-900 font-volkhov mb-6">Table des matières</h2>
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <a href="#section1" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">01</span>
                                    <span class="font-poppins text-gray-700">Dispositions générales</span>
                                </a>
                                <a href="#section2" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">02</span>
                                    <span class="font-poppins text-gray-700">Conditions d'accès</span>
                                </a>
                                <a href="#section3" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">03</span>
                                    <span class="font-poppins text-gray-700">Règles de jeu</span>
                                </a>
                                <a href="#section4" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">04</span>
                                    <span class="font-poppins text-gray-700">Compétitions & Calendrier</span>
                                </a>
                                <a href="#section5" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">05</span>
                                    <span class="font-poppins text-gray-700">Code de discipline</span>
                                </a>
                                <a href="#section6" class="flex items-center gap-3 p-3 hover:bg-[#f5bbe2] hover:bg-opacity-20 rounded-lg transition-colors">
                                    <span class="text-[#E28D98] font-bold">06</span>
                                    <span class="font-poppins text-gray-700">Procédures spéciales</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 1: Dispositions Générales -->
                <div id="section1" class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#E28D98]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">01. Dispositions générales</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">1.1 - Objet et champ d'application</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    La Olibo League est une compétition de football amateur organisée à Yaoundé. Ces règlements s'appliquent à toutes les équipes, joueurs, staff et officiels participant à la ligue. Tout participant accepte
                                    implicitement de se soumettre à ces règles.
                                </p>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">1.2 - Instances de gouvernance</h3>
                                <div class="font-poppins text-gray-700 text-base leading-relaxed space-y-3">
                                    <p><strong>Assemblée Générale :</strong> Instance suprême composée des représentants des équipes affiliées.</p>
                                    <p><strong>Bureau Exécutif :</strong> Organe de gestion quotidienne responsable de l'administration de la ligue.</p>
                                    <p><strong>Commission Sportive :</strong> Chargée de superviser les aspects sportifs, disciplinaires et techniques.</p>
                                    <p><strong>Conseil d'Arbitrage :</strong> Organise et supervise le corps arbitral de la compétition.</p>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">1.3 - Saisons sportives</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    La saison sportive s'étend sur une période de 12 mois calendaires. Elle se divise en phases régulière et play-off, selon le calendrier adopté par le Bureau Exécutif.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 2: Conditions d'Accès -->
                <div id="section2" class="px-6 lg:px-20 py-12 bg-white">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#EBA08B]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">02. Conditions d'accès</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">2.1 - Critères d'admission des équipes</h3>
                                <ul class="font-poppins text-gray-700 text-base space-y-2 ml-4">
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#E28D98] font-bold mt-1">•</span>
                                        <span>Statut juridique reconnu (Club ou Association officielle)</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#E28D98] font-bold mt-1">•</span>
                                        <span>Présentation d'un dossier complet et conforme</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#E28D98] font-bold mt-1">•</span>
                                        <span>Paiement intégral de la cotisation d'affiliation</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#E28D98] font-bold mt-1">•</span>
                                        <span>Acceptation des règlements de la ligue</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#E28D98] font-bold mt-1">•</span>
                                        <span>Mise en place d'une structure administrative et sportive</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">2.2 - Conditions des joueurs</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Âge requis :</strong> Minimum 18 ans révolus au moment de l'enregistrement.</p>
                                    <p><strong>Nationalité :</strong> Possibilité pour les joueurs expatriés avec accord préalable du Bureau Exécutif (maximum 3 par équipe).</p>
                                    <p><strong>Documents obligatoires :</strong> Pièce d'identité valide et certificat médical de non-contre-indication à la pratique du football.</p>
                                    <p><strong>Affiliation :</strong> Tout joueur doit être enregistré et affilié avant sa première participation officielle.</p>
                                </div>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">2.3 - Transferts intra-ligue</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    Les transferts de joueurs entre équipes de la ligue sont possibles selon les périodes définies par la Commission Sportive. Chaque transfert doit être validé par écrit et enregistré auprès du secrétariat de la
                                    ligue.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 3: Règles de Jeu -->
                <div id="section3" class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#E28D98]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">03. Règles de jeu</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">3.1 - Conformité réglementaire</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    La Olibo League applique les règles officielles du football définies par la FIFA et la FECAFOOT. Tout match doit se dérouler conformément à ces règles, sans exception.
                                </p>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">3.2 - Composition des équipes</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Effectif terrain :</strong> 11 joueurs minimum (1 gardien, 10 outfield players).</p>
                                    <p><strong>Effectif sur le banc :</strong> Minimum 7 remplaçants (dont au moins 1 gardien).</p>
                                    <p><strong>Remplaçants :</strong> Jusqu'à 5 remplaçants peuvent entrer en jeu par match.</p>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">3.3 - Durée des matchs</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Temps régulementaire :</strong> 2 × 45 minutes (90 minutes total).</p>
                                    <p><strong>Pause à la mi-temps :</strong> 15 minutes.</p>
                                    <p><strong>Prolongations (play-offs) :</strong> 2 × 15 minutes si match nul en fin de temps régulementaire.</p>
                                    <p><strong>Tirs au but :</strong> En cas d'égalité après prolongations.</p>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">3.4 - Équipements obligatoires</h3>
                                <ul class="font-poppins text-gray-700 text-base space-y-2 ml-4">
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#EBA08B] font-bold mt-1">•</span>
                                        <span>Maillot distinctif de l'équipe avec numérotation</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#EBA08B] font-bold mt-1">•</span>
                                        <span>Short et chaussettes uniformes</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#EBA08B] font-bold mt-1">•</span>
                                        <span>Chaussures de football avec crampons conformes</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#EBA08B] font-bold mt-1">•</span>
                                        <span>Protège-tibias obligatoires</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-[#EBA08B] font-bold mt-1">•</span>
                                        <span>Le gardien doit porter une tenue distincte</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 4: Compétitions & Calendrier -->
                <div id="section4" class="px-6 lg:px-20 py-12 bg-white">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#EBA08B]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">04. Compétitions & calendrier</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-4">4.1 - Format du championnat</h3>
                                <div class="space-y-4 font-poppins text-gray-700 text-base">
                                    <div>
                                        <strong class="block mb-2">Phase régulière (Aller-retour)</strong>
                                        <p>Les équipes se rencontrent chacune 2 fois. Total : 2(n-1) matchs par équipe, où n = nombre d'équipes.</p>
                                    </div>
                                    <div>
                                        <strong class="block mb-2">Classement</strong>
                                        <p>Victoire : 3 points | Match nul : 1 point | Défaite : 0 point. Le classement se détermine par : points, différence de buts, buts marqués.</p>
                                    </div>
                                    <div>
                                        <strong class="block mb-2">Phase play-off (si applicable)</strong>
                                        <p>Les 4 meilleures équipes accèdent aux play-offs. Matchs à élimination directe jusqu'en finale.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">4.2 - Respect du calendrier</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    Le calendrier est établi et validé par le Bureau Exécutif avant le début de la saison. Les équipes doivent absolument respecter les dates et horaires fixés. Tout retard sans justification entraîne des pénalités.
                                </p>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">4.3 - Reports et abandons</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Report de match :</strong> Justifié uniquement par des circonstances exceptionnelles (intempéries extrêmes, situation de sécurité majeure). Demande écrite obligatoire 72h avant.</p>
                                    <p><strong>Abandon de match :</strong> Entraîne défaite 3-0 et pénalités disciplinaires.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 5: Code de Discipline -->
                <div id="section5" class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#E28D98]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">05. Code de discipline</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-4">5.1 - Infractions et sanctions</h3>
                                <div class="space-y-4 font-poppins text-gray-700 text-base">
                                    <div class="border-l-4 border-[#E28D98] pl-4">
                                        <strong class="block mb-1">Carton jaune</strong>
                                        <p>Suspension automatique après accumulation (2e carton dans un match = expulsion ; 5 cartons sur une saison = suspension d'1 match, etc.)</p>
                                    </div>
                                    <div class="border-l-4 border-[#EBA08B] pl-4">
                                        <strong class="block mb-1">Carton rouge direct</strong>
                                        <p>Infraction grave (violence, insulte, geste obscène). Entraîne : expulsion immédiate, suspension d'1+ matchs, pénalité financière.</p>
                                    </div>
                                    <div class="border-l-4 border-[#f5bbe2] pl-4">
                                        <strong class="block mb-1">Comportement de l'équipe</strong>
                                        <p>Agression verbale/physique envers arbitres, retard non justifié, non-respect des règles : amende d'équipe + suspension possible.</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">5.2 - Processus disciplinaire</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>1. Rapport :</strong> L'arbitre établit un rapport détaillé pour toute infraction.</p>
                                    <p><strong>2. Examen :</strong> Commission Sportive examine le cas dans les 48h.</p>
                                    <p><strong>3. Notif. :</strong> L'équipe et le joueur sont notifiés de la décision par écrit.</p>
                                    <p><strong>4. Appel :</strong> Droit d'appel dans les 7 jours auprès du Bureau Exécutif.</p>
                                </div>
                            </div>

                            <div class="bg-white border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">5.3 - Interdictions strictes</h3>
                                <ul class="font-poppins text-gray-700 text-base space-y-2 ml-4">
                                    <li class="flex items-start gap-3">
                                        <span class="text-red-500 font-bold mt-1">⚠</span>
                                        <span>Violence, racisme, discrimination d'aucune sorte</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-red-500 font-bold mt-1">⚠</span>
                                        <span>Consommation d'alcool ou de substances illégales</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-red-500 font-bold mt-1">⚠</span>
                                        <span>Port d'armes ou d'objets dangereux</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-red-500 font-bold mt-1">⚠</span>
                                        <span>Falsification de documents</span>
                                    </li>
                                    <li class="flex items-start gap-3">
                                        <span class="text-red-500 font-bold mt-1">⚠</span>
                                        <span>Matchs arrangés ou paris sur les matchs</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Section 6: Procédures Spéciales -->
                <div id="section6" class="px-6 lg:px-20 py-12 bg-white">
                    <div class=" ">
                        <div class="flex items-center gap-3 mb-8">
                            <div class="w-1 h-10 bg-[#EBA08B]"></div>
                            <h2 class="text-2xl md:text-3xl font-bold text-gray-900 font-volkhov">06. Procédures spéciales</h2>
                        </div>

                        <div class="space-y-6">
                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">6.1 - Arbitrage</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Composition :</strong> 1 arbitre central, 2 arbitres de ligne, 1 arbitre remplaçant.</p>
                                    <p><strong>Qualification :</strong> Les arbitres doivent être certifiés et à jour de leurs formations.</p>
                                    <p><strong>Indépendance :</strong> Aucun arbitre ne doit être affilié à l'une des équipes en présence.</p>
                                </div>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">6.2 - Sécurité et responsabilités</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Sécurité des installations :</strong> Les équipes hôtes sont responsables de la sécurité du stade et de l'accueil des équipes visiteuses.</p>
                                    <p><strong>Assurance :</strong> Chaque équipe doit souscrire une assurance responsabilité civile couvrant les blessures et dommages.</p>
                                    <p><strong>Premiers secours :</strong> Un service de secours médical doit être présent à chaque match.</p>
                                </div>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">6.3 - Réclamations et appels</h3>
                                <p class="font-poppins text-gray-700 text-base leading-relaxed">
                                    Toute réclamation concernant un match doit être adressée par écrit au Bureau Exécutif dans les 72h suivant le match. La Commission Sportive examine la demande et rend une décision dans les 7 jours. Un appel peut
                                    être introduit auprès du Bureau Exécutif dans les 7 jours suivant la notification.
                                </p>
                            </div>

                            <div class="bg-gray-50 border border-gray-200 rounded-lg p-6">
                                <h3 class="text-lg font-bold text-gray-900 font-volkhov mb-3">6.4 - Obligations financières</h3>
                                <div class="font-poppins text-gray-700 text-base space-y-3">
                                    <p><strong>Frais d'affiliation :</strong> Payables avant le début de la saison.</p>
                                    <p><strong>Frais d'arbitrage :</strong> Supportés par les équipes (montant par match défini annuellement).</p>
                                    <p><strong>Amendes disciplinaires :</strong> Payables dans les 15 jours suivant notification.</p>
                                    <p><strong>Non-paiement :</strong> Entraîne suspension d'équipe jusqu'à régularisation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- CTA Section -->
                <div class="w-full flex justify-center px-6 lg:px-20 py-16 bg-gradient-to-r from-[#f5bbe2] to-[#EBA08B] bg-opacity-10">
                    <div class="max-w-4xl  text-center">
                        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 font-volkhov mb-6">Questions sur la réglementation ?</h2>
                        <p class="font-poppins text-gray-700 text-lg mb-8">Vous avez besoin de clarifications sur un point spécifique ? Notre Commission Sportive est disponible pour vous aider.</p>
                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:commission@oliboleague.com" pButton pRipple type="button" label="Contacter la Commission Sportive" class="!bg-[#E28D98] !border-none !font-volkhov !rounded-full hover:!bg-[#d67a85] transition-colors !px-8">
                            </a>
                            <button id="download" pButton pRipple type="button" label="Télécharger le PDF complet" class="!bg-gray-900 !text-white !border-none !font-volkhov !rounded-full hover:!bg-gray-800 transition-colors !px-8"></button>
                        </div>
                    </div>
                </div>

                <!-- Additional Notes -->
                <div class="px-6 lg:px-20 py-12 bg-[#FFFDFA]">
                    <div class=" ">
                        <div class="bg-white border-l-4 border-[#E28D98] rounded-r-lg p-8">
                            <h3 class="text-xl font-bold text-gray-900 font-volkhov mb-4">Remarques importantes</h3>
                            <ul class="font-poppins text-gray-700 text-base space-y-3">
                                <li class="flex items-start gap-3">
                                    <span class="text-[#E28D98] font-bold mt-1">✓</span>
                                    <span>Ces règlements peuvent être amendés par le Bureau Exécutif avec accord de l'Assemblée Générale.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-[#E28D98] font-bold mt-1">✓</span>
                                    <span>En cas de conflit d'interprétation, le Bureau Exécutif a le pouvoir de statuer.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-[#E28D98] font-bold mt-1">✓</span>
                                    <span>La Olibo League se réserve le droit de modifier les règles pour garantir l'équité et la sécurité.</span>
                                </li>
                                <li class="flex items-start gap-3">
                                    <span class="text-[#E28D98] font-bold mt-1">✓</span>
                                    <span>Tous les participants s'engagent à respecter ces règles sans exception.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <footer-widget />
    `
})
export class Regulations {
  constructor(public router: Router) {}
}
