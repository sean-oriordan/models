import { Type } from '@angular/core';
import { StaticDataCurrencyCodesComponent } from './pages/static-data/currency-codes/currency-codes.component';
import { StaticDataCountryCodesComponent } from './pages/static-data/country-codes/country-codes.component';
import { StaticDataSecurityTypesComponent } from './pages/static-data/security-types/security-types.component';
import { StaticDataHolidayCalendarComponent } from './pages/static-data/holiday-calendar/holiday-calendar.component';
import { StewardshipEngagementComponent } from './pages/stewardship/engagement/engagement.component';
import { StewardshipVotingComponent } from './pages/stewardship/voting/voting.component';
import { StewardshipImpactComponent } from './pages/stewardship/impact/impact.component';
import { StewardshipOutcomesComponent } from './pages/stewardship/outcomes/outcomes.component';
import { AnalyticsDashboardsComponent } from './pages/analytics/dashboards/dashboards.component';
import { AnalyticsRiskComponent } from './pages/analytics/risk/risk.component';
import { AnalyticsScenarioComponent } from './pages/analytics/scenario/scenario.component';
import { AnalyticsAttributionComponent } from './pages/analytics/attribution/attribution.component';
import { CompliancePoliciesComponent } from './pages/compliance/policies/policies.component';
import { ComplianceReportingComponent } from './pages/compliance/reporting/reporting.component';
import { ComplianceAuditsComponent } from './pages/compliance/audits/audits.component';
import { ComplianceDisclosuresComponent } from './pages/compliance/disclosures/disclosures.component';
import { OperationsOnboardingComponent } from './pages/operations/onboarding/onboarding.component';
import { OperationsTransactionsComponent } from './pages/operations/transactions/transactions.component';
import { OperationsReconciliationComponent } from './pages/operations/reconciliation/reconciliation.component';
import { OperationsSupportComponent } from './pages/operations/support/support.component';

export interface NavChild {
  label: string;
  path: string;
  title: string;
  component: Type<unknown>;
}

export interface NavParent {
  label: string;
  slug: string;
  children: NavChild[];
}

export interface Branch {
  label: string;
  slug: string;
}

// Top tabs (branches). Update here to add or rename branches.
export const BRANCHES: Branch[] = [
  { label: 'Pink', slug: 'pink' },
  { label: 'Blue', slug: 'blue' },
  { label: 'Red', slug: 'red' },
  { label: 'Yellow', slug: 'yellow' },
];

// Add or reorder parents/children here to update the sidebar and routes.
export const NAV: NavParent[] = [
  {
    label: 'Maintain Static Data',
    slug: 'maintain-static-data',
    children: [
      {
        label: 'Currency Codes',
        path: 'currency-codes',
        title: 'Currency Codes',
        component: StaticDataCurrencyCodesComponent,
      },
      {
        label: 'Country Codes',
        path: 'country-codes',
        title: 'Country Codes',
        component: StaticDataCountryCodesComponent,
      },
      {
        label: 'Security Types',
        path: 'security-types',
        title: 'Security Types',
        component: StaticDataSecurityTypesComponent,
      },
      {
        label: 'Holiday Calendar',
        path: 'holiday-calendar',
        title: 'Holiday Calendar',
        component: StaticDataHolidayCalendarComponent,
      },
    ],
  },
  {
    label: 'Stewardship',
    slug: 'stewardship',
    children: [
      { label: 'Engagement', path: 'engagement', title: 'Issuer Engagement', component: StewardshipEngagementComponent },
      { label: 'Voting', path: 'voting', title: 'Proxy Voting', component: StewardshipVotingComponent },
      { label: 'Impact', path: 'impact', title: 'Impact Themes', component: StewardshipImpactComponent },
      { label: 'Outcomes', path: 'outcomes', title: 'Measured Outcomes', component: StewardshipOutcomesComponent },
    ],
  },
  {
    label: 'Analytics',
    slug: 'analytics',
    children: [
      { label: 'Dashboards', path: 'dashboards', title: 'Impact Dashboards', component: AnalyticsDashboardsComponent },
      { label: 'Risk', path: 'risk', title: 'Risk Signals', component: AnalyticsRiskComponent },
      { label: 'Scenario', path: 'scenario', title: 'Scenario Modeling', component: AnalyticsScenarioComponent },
      { label: 'Attribution', path: 'attribution', title: 'Impact Attribution', component: AnalyticsAttributionComponent },
    ],
  },
  {
    label: 'Compliance',
    slug: 'compliance',
    children: [
      { label: 'Policies', path: 'policies', title: 'Policy Library', component: CompliancePoliciesComponent },
      { label: 'Reporting', path: 'reporting', title: 'Regulatory Reporting', component: ComplianceReportingComponent },
      { label: 'Audits', path: 'audits', title: 'Audit Readiness', component: ComplianceAuditsComponent },
      { label: 'Disclosures', path: 'disclosures', title: 'Public Disclosures', component: ComplianceDisclosuresComponent },
    ],
  },
  {
    label: 'Operations',
    slug: 'operations',
    children: [
      { label: 'Onboarding', path: 'onboarding', title: 'Investor Onboarding', component: OperationsOnboardingComponent },
      { label: 'Transactions', path: 'transactions', title: 'Transaction Flow', component: OperationsTransactionsComponent },
      { label: 'Reconciliation', path: 'reconciliation', title: 'Reconciliation', component: OperationsReconciliationComponent },
      { label: 'Support', path: 'support', title: 'Client Support', component: OperationsSupportComponent },
    ],
  },
];
