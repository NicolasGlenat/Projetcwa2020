import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SiloComponent} from './silo/silo.component';

const routes: Routes = [
{path : "silo", component : SiloComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
