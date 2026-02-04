import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { BRANCHES, NAV, NavParent } from '../../navigation';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  nav: NavParent[] = NAV;
  activeBranch = BRANCHES[0].slug;
  openIndex: number | null = null;
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

  openParent(index: number): void {
    this.openIndex = index;
  }

  closeParent(index: number): void {
    if (this.openIndex === index) {
      this.openIndex = null;
    }
  }

  onFocusOut(event: FocusEvent, index: number): void {
    const currentTarget = event.currentTarget as HTMLElement;
    const nextTarget = event.relatedTarget as Node | null;
    if (!nextTarget || !currentTarget.contains(nextTarget)) {
      this.closeParent(index);
    }
  }

  onChildClick(): void {
    this.openIndex = null;
  }

  private setActiveBranch(url: string): void {
    const segment = url.split('?')[0].split('/').filter(Boolean)[0];
    const match = BRANCHES.find((branch) => branch.slug === segment);
    if (match) {
      this.activeBranch = match.slug;
    }
  }
}
