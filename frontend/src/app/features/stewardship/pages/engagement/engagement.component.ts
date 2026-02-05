import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stewardship-engagement',
  templateUrl: './engagement.component.html',
  styleUrls: ['./engagement.component.css'],
})
export class StewardshipEngagementComponent implements OnInit {
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
