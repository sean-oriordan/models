import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BRANCHES, NAV } from '../../navigation';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  branches = BRANCHES;
  activeBranch = BRANCHES[0].slug;
  private navSub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.setActiveBranch(this.router.url);
    this.navSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.setActiveBranch((event as NavigationEnd).urlAfterRedirects);
      });
  }

  ngOnDestroy(): void {
    this.navSub?.unsubscribe();
  }

  branchLink(slug: string): string[] {
    return ['/', slug, NAV[0].slug, NAV[0].children[0].path];
  }

  private setActiveBranch(url: string): void {
    const segment = url.split('?')[0].split('/').filter(Boolean)[0];
    const match = BRANCHES.find((branch) => branch.slug === segment);
    if (match) {
      this.activeBranch = match.slug;
    }
  }
}
