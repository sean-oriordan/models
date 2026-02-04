import { Type } from '@angular/core';
import { StaticDataClientsComponent } from './pages/static-data/clients/clients.component';
import { StaticDataClientSecuritiesComponent } from './pages/static-data/client-securities/client-securities.component';
import { StaticDataCountriesComponent } from './pages/static-data/countries/countries.component';
import { StaticDataCurrencyCodesComponent } from './pages/static-data/currency-codes/currency-codes.component';
import { StaticDataFundsComponent } from './pages/static-data/funds/funds.component';
import { StaticDataFundAdjustmentComponent } from './pages/static-data/fund-adjustment/fund-adjustment.component';
import { StaticDataFundCentralBankRatesComponent } from './pages/static-data/fund-central-bank-rates/fund-central-bank-rates.component';
import { StaticDataFundShareClassComponent } from './pages/static-data/fund-share-class/fund-share-class.component';
import { StaticDataFundShareClassOngoingChargesComponent } from './pages/static-data/fund-share-class-ongoing-charges/fund-share-class-ongoing-charges.component';
import { StaticDataFxRatesComponent } from './pages/static-data/fx-rates/fx-rates.component';
import { StaticDataGlMappingsComponent } from './pages/static-data/gl-mappings/gl-mappings.component';
import { StaticDataGroupExchangesComponent } from './pages/static-data/group-exchanges/group-exchanges.component';
import { StaticDataHoldingsComponent } from './pages/static-data/holdings/holdings.component';
import { StaticDataInflationRatesComponent } from './pages/static-data/inflation-rates/inflation-rates.component';
import { StaticDataSecuritiesComponent } from './pages/static-data/securities/securities.component';
import { StaticDataSecurityTypeMapComponent } from './pages/static-data/security-type-map/security-type-map.component';
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
      { label: 'Clients', path: 'clients', title: 'Clients', component: StaticDataClientsComponent },
      { label: 'Client Securities', path: 'client-securities', title: 'Client Securities', component: StaticDataClientSecuritiesComponent },
      { label: 'Countries', path: 'countries', title: 'Countries', component: StaticDataCountriesComponent },
      { label: 'Currency Codes', path: 'currency-codes', title: 'Currency Codes', component: StaticDataCurrencyCodesComponent },
      { label: 'Funds', path: 'funds', title: 'Funds', component: StaticDataFundsComponent },
      { label: 'Fund Adjustment', path: 'fund-adjustment', title: 'Fund Adjustment', component: StaticDataFundAdjustmentComponent },
      { label: 'Fund Central Bank Rates', path: 'fund-central-bank-rates', title: 'Fund Central Bank Rates', component: StaticDataFundCentralBankRatesComponent },
      { label: 'Fund Share Class', path: 'fund-share-class', title: 'Fund Share Class', component: StaticDataFundShareClassComponent },
      { label: 'Fund Share Class Ongoing Charges', path: 'fund-share-class-ongoing-charges', title: 'Fund Share Class Ongoing Charges', component: StaticDataFundShareClassOngoingChargesComponent },
      { label: 'FX Rates', path: 'fx-rates', title: 'FX Rates', component: StaticDataFxRatesComponent },
      { label: 'GL Mappings', path: 'gl-mappings', title: 'GL Mappings', component: StaticDataGlMappingsComponent },
      { label: 'Group Exchanges', path: 'group-exchanges', title: 'Group Exchanges', component: StaticDataGroupExchangesComponent },
      { label: 'Holdings', path: 'holdings', title: 'Holdings', component: StaticDataHoldingsComponent },
      { label: 'Inflation Rates', path: 'inflation-rates', title: 'Inflation Rates', component: StaticDataInflationRatesComponent },
      { label: 'Securities', path: 'securities', title: 'Securities', component: StaticDataSecuritiesComponent },
      { label: 'Security Type Map', path: 'security-type-map', title: 'Security Type Map', component: StaticDataSecurityTypeMapComponent },
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
