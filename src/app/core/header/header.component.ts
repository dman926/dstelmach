import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

	openResume(): void {
		window.open('/assets/Resume.pdf', '_blank');
	}

}
