import { AfterContentInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/core/data.service';
import { Project } from 'src/app/models/project';

@Component({
	selector: 'app-projects',
	templateUrl: './projects.component.html',
	styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, AfterContentInit, OnDestroy {

	public loaded: boolean;

	public projects: Project[];
	private projects$: Subscription;

	constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

	ngOnInit(): void {
		this.loaded = false;
		this.projects = [];
	}

	ngAfterContentInit(): void {
		this.projects$ = this.dataService.getProjects().subscribe(res => {
			if (res) {
				this.projects = res.data;
			}
			if (!this.loaded) {
				this.loaded = true;
				setTimeout(() => {
					this.route.fragment.subscribe(fragment => {
						if (fragment) {
							const el = document.querySelector('#' + fragment);
							if (el) {
								el.scrollIntoView({ behavior: 'smooth', block: 'center' });
							}
						}
					});
				}, 250);
			}
		});
	}

	ngOnDestroy(): void {
		this.projects$.unsubscribe();
	}

	slugify(text: string): string {
		text = text.replace(/^\s+|\s+$/g, '').toLowerCase();

		// Remove accents and disallowed symbols
		const from = 'ÁÄÂÀÃÅČÇĆĎÉĚËÈÊẼĔȆÍÌÎÏŇÑÓÖÒÔÕØŘŔŠŤÚŮÜÙÛÝŸŽáäâàãåčçćďéěëèêẽĕȇíìîïňñóöòôõøðřŕšťúůüùûýÿžþÞĐđßÆa·/_,:;';
		const to = 'AAAAAACCCDEEEEEEEEIIIINNOOOOOORRSTUUUUUYYZaaaaaacccdeeeeeeeeiiiinnooooooorrstuuuuuyyzbBDdBAa------';
		for (let i = 0, l = from.length; i < l; i++) {
			text = text.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
		}

		// Remove invalid chars. Collapse whitespace and replace by -. Collapse dashes
		return text.replace(/[^a-z0-9 -]/g, '').replace(/\s+/g, '-').replace(/-+/g, '-');
	}

	open(link: string, external?: boolean): void {
		if (external) {
			window.open(link, '_blank');
		} else {
			this.router.navigate(['/experience'], { fragment: link });
		}
	}

}
