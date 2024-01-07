import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-aoc-base',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './aoc-base.component.html',
  styleUrl: './aoc-base.component.scss'
})
export class AocBaseComponent {

  constructor(
    private router: Router,
    private route: ActivatedRoute
    ) {}

  navigate(path: string) {
    void this.router.navigate([path], {relativeTo: this.route})
  }
}
