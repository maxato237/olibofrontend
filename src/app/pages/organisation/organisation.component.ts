import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FooterWidget } from '../../layout/component/footerwidget';

@Component({
    selector: 'app-organisation',
    imports: [RouterModule,FooterWidget],
    templateUrl: './organisation.component.html',
    styleUrl: './organisation.component.scss'
})
export class Organisation {
    constructor(public router: Router) {}
}
