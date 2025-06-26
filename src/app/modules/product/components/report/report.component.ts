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
    // Replace with your SSRS Report Server URL
    this.reportUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'http://localhost/ReportServer?/InventoryReports/ProductListReport&rs:Command=Render'
    );
    this.downloadUrl = 'https://localhost:7187/api/Report/export'; // Replace with your API URL
  }

  ngOnInit(): void {}
}