import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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

@NgModule({

    declarations: [
  AppComponent,
  HeaderComponent,
  SidebarComponent,
  StaticDataCurrencyCodesComponent,
  StaticDataCountryCodesComponent,
  StaticDataSecurityTypesComponent,
  StaticDataHolidayCalendarComponent,
  StewardshipEngagementComponent,
  StewardshipVotingComponent,
  StewardshipImpactComponent,
  StewardshipOutcomesComponent,
  AnalyticsDashboardsComponent,
  AnalyticsRiskComponent,
  AnalyticsScenarioComponent,
  AnalyticsAttributionComponent,
  CompliancePoliciesComponent,
  ComplianceReportingComponent,
  ComplianceAuditsComponent,
  ComplianceDisclosuresComponent,
  OperationsOnboardingComponent,
  OperationsTransactionsComponent,
  OperationsReconciliationComponent,
  OperationsSupportComponent
    ],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
