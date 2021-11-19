import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/clubs' },
  { path: 'docs', loadChildren: () => import('./pages/docs/docs.module').then(m => m.DocsModule) },
  { path: 'clubs', loadChildren: () => import('./pages/clubs/clubs.module').then(m => m.ClubsModule) },
  { path: '**', redirectTo: '/docs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
