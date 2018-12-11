import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DiagramComponent } from './components/diagram/diagram.component';
import { SysDiagramComponent } from './components/sys-diagram/sys-diagram.component';
import { DevDiagramComponent } from './components/dev-diagram/dev-diagram.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'diagram', component: DiagramComponent },
  { path: 'devdiagram', component: DevDiagramComponent },
  { path: 'sysdiagram', component: SysDiagramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
