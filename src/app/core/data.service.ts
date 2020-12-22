import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Experience } from '../models/experience';
import { Project } from '../models/project';
import { Token } from '../models/token';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class DataService {

	private expiryTime = 1; // Time to expire in days

	public experiences$: Observable<Token<Experience[]>>;
	public projects$: Observable<Token<Project[]>>;
	private experiencesSubject: BehaviorSubject<Token<Experience[]>>;
	private projectsSubject: BehaviorSubject<Token<Project[]>>;

	constructor(private httpClient: HttpClient) {
		this.experiencesSubject = new BehaviorSubject<Token<Experience[]>>(JSON.parse(localStorage.getItem('experiences')));
		this.experiences$ = this.experiencesSubject.asObservable();
		this.projectsSubject = new BehaviorSubject<Token<Project[]>>(JSON.parse(localStorage.getItem('projects')));
		this.projects$ = this.projectsSubject.asObservable();
		// If not production, then the current cache is destroyed on refresh, but persists during routerLink navigation.
		if (!environment.production) {
			localStorage.removeItem('experiences');
			localStorage.removeItem('projects');
		}
		// Delete the cache if it is expired, then prepare it for viewing.
		this.getExperiences().subscribe(res => {
			if (res) {
				if (new Date() > new Date(res.expires)) {
					localStorage.removeItem('experiences');
				}
			}
			this.getExperiences();
		});
		this.getProjects().subscribe(res => {
			if (res) {
				if (new Date() > new Date(res.expires)) {
					localStorage.removeItem('projects');
				}
			}
			this.getProjects();
		});
	}

	public getExperiences(): Observable<Token<Experience[]>> {
		if (localStorage.getItem('experiences') == null ||
			(JSON.parse(localStorage.getItem('experiences')) as Token<Experience[]>).expires < new Date()) {
			this.httpClient.get<Experience[]>('../assets/experiences.json').toPromise().then(res => {
				if (res) {
					const currentTime = new Date();
					currentTime.setDate(currentTime.getDate() + this.expiryTime);
					const newToken: Token<Experience[]> = {
						expires: currentTime,
						data: res as Experience[]
					};
					localStorage.setItem('experiences', JSON.stringify(newToken));
					this.experiencesSubject.next(newToken);
				}
			}).catch(err => {
				console.error('Error fetching experiences.json: ' + err);
				return null;
			});
		}
		return this.experiences$;
	}

	public getProjects(): Observable<Token<Project[]>> {
		if (localStorage.getItem('projects') == null ||
			(JSON.parse(localStorage.getItem('projects')) as Token<Project[]>).expires < new Date()) {
			this.httpClient.get<Project[]>('../assets/projects.json').toPromise().then(res => {
				if (res) {
					const currentTime = new Date();
					currentTime.setDate(currentTime.getDate() + this.expiryTime);
					const newToken: Token<Project[]> = {
						expires: currentTime,
						data: res as Project[]
					};
					localStorage.setItem('projects', JSON.stringify(newToken));
					this.projectsSubject.next(newToken);
				}
			}).catch(err => {
				console.error('Error fetching projects.json: ' + err);
				return null;
			});
		}
		return this.projects$;
	}

}
