import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Observable } from 'rxjs';

import { BreadcrumbService } from '../../@core/services/breadcrumb.service';
import { IBreadcrumb } from '../../@core/interfaces/breadcrumb.interface';

import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbComponent {

  faHome = faHome;

  breadcrumbs$: Observable<IBreadcrumb[]>;

  constructor(private readonly breadcrumbService: BreadcrumbService) {
    this.breadcrumbs$ = breadcrumbService.breadcrumbs$;
  }

}
