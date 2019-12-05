import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { HomeComponent } from './home/home.component';
import { ResponderRoteiroComponent } from './roteiro/responder/responder.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
			path: 'home',			
			component: HomeComponent
		},
    {
			path: 'roteiro',			
			component: ResponderRoteiroComponent
		}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

