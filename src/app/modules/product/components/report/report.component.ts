import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reportUrl: SafeResourceUrl;
  downloadUrl: string;

  constructor(private sanitizer: DomSanitizer) {
    // Use /display for iframe
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://localhost:7161/api/Report/display'
    );

    // Use /download for manual download
    this.downloadUrl = 'https://localhost:7161/api/Report/download';
  }

  ngOnInit(): void {}
}