import { Route } from "@angular/router";
import { DayOneComponent } from "./day-one/day-one.component";
import { DayTwoComponent } from "./day-two/day-two.component";
import { AocBaseComponent } from "./aoc-base/aoc-base.component";

export const AOC_ROUTES: Route[] = [
  {path: '', component: AocBaseComponent , data: { breadcrumb: 'advent' }},
  {path: 'day-one', loadComponent: () => import('./day-one/day-one.component').then(m => m.DayOneComponent), data: { breadcrumb: 'day-one' }},
  {path: 'day-two', loadComponent: () => import('./day-two/day-two.component').then(m => m.DayTwoComponent), data: { breadcrumb: 'day-two' }}
];
