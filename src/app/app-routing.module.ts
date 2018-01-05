import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';


const routes: Routes = [
	{
		path: 'home',
		loadChildren: 'app/features/home/home.module#HomeModule',
	},
	{
		path: 'signup',
		loadChildren: 'app/features/sign-up/sign-up.module#SignUpModule',
	},
	{
		path: 'forgotpassword',
		loadChildren: 'app/features/forgot-password/forgot-password.module#ForgotPasswordModule'
	},
	{
		path: 'userhome',
		loadChildren: 'app/features/user-home/user-home.module#UserHomeModule'
	},
	{
		path: 'corporatehome',
		loadChildren: 'app/features/corporate-home/corporate-home.module#CorporateHomeModule'
	},
	{ path: '', redirectTo: 'home', pathMatch: 'full' },
	{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
