import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
	},
	{
		path: 'projects',
		loadChildren: () => import('./projects/projects.module').then(m => m.ProjectsModule)
	},
	{
		path: 'experience',
		loadChildren: () => import('./experience/experience.module').then(m => m.ExperienceModule)
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
	exports: [RouterModule]
})
export class AppRoutingModule { }
