import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-data-security-type-map',
  templateUrl: './security-type-map.component.html',
  styleUrls: ['./security-type-map.component.css'],
})
export class StaticDataSecurityTypeMapComponent implements OnInit {
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
