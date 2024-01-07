import { Route } from '@angular/router';
import { DayOneComponent } from './adventOfCode/day-one/day-one.component';

export const routes: Route[] = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./home/home.routes').then(m => m.HOME_ROUTES), data: { breadcrumb: 'home' }},
  {path: 'advent', loadChildren: () => import('./adventOfCode/aoc.routes').then(m => m.AOC_ROUTES), data: { breadcrumb: 'advent' }},
  {path: 'wallet', loadChildren: () => import('./wallet/wallet.routes').then(m => m.WALLET_ROUTES), data: { breadcrumb: 'wallet' }},
];
