import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/layout/header/header.component';
import { SidebarComponent } from './core/layout/sidebar/sidebar.component';
import { StaticDataClientsComponent } from './features/static-data/pages/clients/clients.component';
import { StaticDataClientSecuritiesComponent } from './features/static-data/pages/client-securities/client-securities.component';
import { StaticDataCountriesComponent } from './features/static-data/pages/countries/countries.component';
import { StaticDataCurrencyCodesComponent } from './features/static-data/pages/currency-codes/currency-codes.component';
import { StaticDataFundsComponent } from './features/static-data/pages/funds/funds.component';
import { StaticDataFundAdjustmentComponent } from './features/static-data/pages/fund-adjustment/fund-adjustment.component';
import { StaticDataFundCentralBankRatesComponent } from './features/static-data/pages/fund-central-bank-rates/fund-central-bank-rates.component';
import { StaticDataFundShareClassComponent } from './features/static-data/pages/fund-share-class/fund-share-class.component';
import { StaticDataFundShareClassOngoingChargesComponent } from './features/static-data/pages/fund-share-class-ongoing-charges/fund-share-class-ongoing-charges.component';
import { StaticDataFxRatesComponent } from './features/static-data/pages/fx-rates/fx-rates.component';
import { StaticDataGlMappingsComponent } from './features/static-data/pages/gl-mappings/gl-mappings.component';
import { StaticDataGroupExchangesComponent } from './features/static-data/pages/group-exchanges/group-exchanges.component';
import { StaticDataHoldingsComponent } from './features/static-data/pages/holdings/holdings.component';
import { StaticDataInflationRatesComponent } from './features/static-data/pages/inflation-rates/inflation-rates.component';
import { StaticDataSecuritiesComponent } from './features/static-data/pages/securities/securities.component';
import { StaticDataSecurityTypeMapComponent } from './features/static-data/pages/security-type-map/security-type-map.component';
import { StewardshipEngagementComponent } from './features/stewardship/pages/engagement/engagement.component';
import { StewardshipVotingComponent } from './features/stewardship/pages/voting/voting.component';
import { StewardshipImpactComponent } from './features/stewardship/pages/impact/impact.component';
import { StewardshipOutcomesComponent } from './features/stewardship/pages/outcomes/outcomes.component';
import { AnalyticsDashboardsComponent } from './features/analytics/pages/dashboards/dashboards.component';
import { AnalyticsRiskComponent } from './features/analytics/pages/risk/risk.component';
import { AnalyticsScenarioComponent } from './features/analytics/pages/scenario/scenario.component';
import { AnalyticsAttributionComponent } from './features/analytics/pages/attribution/attribution.component';
import { CompliancePoliciesComponent } from './features/compliance/pages/policies/policies.component';
import { ComplianceReportingComponent } from './features/compliance/pages/reporting/reporting.component';
import { ComplianceAuditsComponent } from './features/compliance/pages/audits/audits.component';
import { ComplianceDisclosuresComponent } from './features/compliance/pages/disclosures/disclosures.component';
import { OperationsOnboardingComponent } from './features/operations/pages/onboarding/onboarding.component';
import { OperationsTransactionsComponent } from './features/operations/pages/transactions/transactions.component';
import { OperationsReconciliationComponent } from './features/operations/pages/reconciliation/reconciliation.component';
import { OperationsSupportComponent } from './features/operations/pages/support/support.component';

@NgModule({

    declarations: [
  AppComponent,
  HeaderComponent,
  SidebarComponent,
  StaticDataClientsComponent,
  StaticDataClientSecuritiesComponent,
  StaticDataCountriesComponent,
  StaticDataCurrencyCodesComponent,
  StaticDataFundsComponent,
  StaticDataFundAdjustmentComponent,
  StaticDataFundCentralBankRatesComponent,
  StaticDataFundShareClassComponent,
  StaticDataFundShareClassOngoingChargesComponent,
  StaticDataFxRatesComponent,
  StaticDataGlMappingsComponent,
  StaticDataGroupExchangesComponent,
  StaticDataHoldingsComponent,
  StaticDataInflationRatesComponent,
  StaticDataSecuritiesComponent,
  StaticDataSecurityTypeMapComponent,
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
