import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { ExperienceRoutingModule } from './experience-routing.module';
import { ExperienceComponent } from './experience/experience.component';


@NgModule({
	declarations: [ExperienceComponent],
	imports: [
		CommonModule,
		ExperienceRoutingModule,

		// Angular Material
		MatChipsModule,
		MatDividerModule,
		MatProgressSpinnerModule
	],
	exports: [ExperienceComponent]
})
export class ExperienceModule { }
