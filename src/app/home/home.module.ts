import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion'; // ?
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

import { ExperienceModule } from '../experience/experience.module';
import { ProjectsModule } from '../projects/projects.module';


@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,

		// Angular Material
		MatButtonModule,
		MatChipsModule,
		MatDividerModule,
		MatExpansionModule,
		MatIconModule,
		MatProgressSpinnerModule,
		MatToolbarModule,
		MatTooltipModule,

		ExperienceModule,
		ProjectsModule
	]
})
export class HomeModule { }
