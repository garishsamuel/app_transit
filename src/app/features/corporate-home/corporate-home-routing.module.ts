import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorporateHomeComponent } from './corporate-home.component';

const routes: Routes = [{
	path: '',
	component: CorporateHomeComponent
}];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class CorporateHomeRoutingModule { }
