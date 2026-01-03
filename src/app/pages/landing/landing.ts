import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RippleModule } from 'primeng/ripple';
import { StyleClassModule } from 'primeng/styleclass';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { TopbarWidget } from './components/topbarwidget.component';
import { HeroWidget } from './components/herowidget';
import { PartnersWidget } from './components/partnerswidget';
import { AboutWidget } from './components/aboutwidget';
import { statisticWidget } from './components/statisticwidget';
import { TestimonialWidget } from './components/testimonialwidget';
import { FooterWidget } from './components/footerwidget';

@Component({
    selector: 'app-landing',
    standalone: true,
    imports: [RouterModule, TopbarWidget, HeroWidget, PartnersWidget, AboutWidget, statisticWidget, TestimonialWidget, FooterWidget, RippleModule, StyleClassModule, ButtonModule, DividerModule],
    template: `
        <div class="bg-surface-0 dark:bg-surface-900">
            <div id="home" class="landing-wrapper overflow-hidden">
                <topbar-widget class="py-8 px-2 mx-0 md:mx-12 lg:px-20 flex items-center justify-between absolute  z-50 bg-transparent w-[95vw]" />
                <div>
                    <hero-widget class="pt-10" />
                    <partners-widget />
                    <about-widget />
                    <statistic-widget/>
                    <testimonial-widget/>
                    <footer-widget />
                </div>
            </div>
        </div>
    `
})
export class Landing {}
