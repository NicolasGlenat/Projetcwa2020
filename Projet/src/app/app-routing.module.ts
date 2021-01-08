import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiloComponent} from './silo/silo.component';
import { ArriveeComponent} from './arrivee/arrivee.component';
import { AjouterComponent} from './ajouter/ajouter.component';
import { AjouterExpComponent } from './ajouter-exp/ajouter-exp.component';

const routes: Routes = [
{path : "silo", component : SiloComponent},
{path : "arrivee", component : ArriveeComponent},
{path : "ajouter", component : AjouterComponent},
{path : "ajouter-exp", component : AjouterExpComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
