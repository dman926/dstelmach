import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

	constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
		iconRegistry.addSvgIcon(
			'linkedIn',
			sanitizer.bypassSecurityTrustResourceUrl('assets/li.svg'));
	}

  ngOnInit(): void {
  }

  public open(url: string): void {
	document.location.href = url;
}

}
