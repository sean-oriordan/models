import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analytics-risk',
  templateUrl: './risk.component.html',
  styleUrls: ['./risk.component.css'],
})
export class AnalyticsRiskComponent implements OnInit {
  parent = '';
  title = '';
  branch = '';
  pageTitle = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data['title'] ?? '';
      this.parent = data['parent'] ?? '';
      this.branch = data['branch'] ?? '';
      this.pageTitle = this.branch ? `${this.title} (${this.branch})` : this.title;
    });
  }
}
