import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiagramComponent } from './components/diagram/diagram.component';
import { SysDiagramComponent } from './components/sys-diagram/sys-diagram.component';
import { DevDiagramComponent } from './components/dev-diagram/dev-diagram.component';

const routes: Routes = [
  { path: '', redirectTo: '/diagram', pathMatch: 'full' },
  { path: 'diagram', component: DiagramComponent },
  { path: 'devdiagram', component: DevDiagramComponent },
  { path: 'sysdiagram', component: SysDiagramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
