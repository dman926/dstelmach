import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ProjectsRoutingModule } from './projects-routing.module';
import { ProjectsComponent } from './projects/projects.component';


@NgModule({
	declarations: [ProjectsComponent],
	imports: [
		CommonModule,
		ProjectsRoutingModule,

		// Angular Material
		MatChipsModule,
		MatDividerModule,
		MatProgressSpinnerModule
	],
	exports: [ProjectsComponent]
})
export class ProjectsModule { }
