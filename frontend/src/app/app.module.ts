import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
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
