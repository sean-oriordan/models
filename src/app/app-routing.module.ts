import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BRANCHES, NAV } from './navigation';

const defaultPath = `${BRANCHES[0].slug}/${NAV[0].slug}/${NAV[0].children[0].path}`;

// Routes are generated from NAV and BRANCHES. Swap components for feature modules as needed.
const childRoutes: Routes = BRANCHES.flatMap((branch) =>
  NAV.flatMap((parent) =>
    parent.children.map((child) => ({
      path: `${branch.slug}/${parent.slug}/${child.path}`,
      component: child.component,
      data: { title: child.title, parent: parent.label, branch: branch.label },
    }))
  )
);

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: defaultPath },
  ...childRoutes,
  { path: '**', redirectTo: defaultPath },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
