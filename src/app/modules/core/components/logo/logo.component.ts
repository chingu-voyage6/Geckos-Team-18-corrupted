import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.css']
})
export class LogoComponent implements OnInit {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'breezycards',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        '../../../../assets/logo/breezycards_logo.svg'
      )
    );
  }
  ngOnInit() {}

  goHome() {
    this.router.navigate(['/home']);
  }
}
