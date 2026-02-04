import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

interface CurrencyRow {
  id: number;
  currencyCode: string;
  country: string;
  updatedBy: string;
  updatedOn: string;
  checkedBy: string;
  checkedOn: string;
}

@Component({
  selector: 'app-static-data-currency-codes',
  templateUrl: './currency-codes.component.html',
  styleUrls: ['./currency-codes.component.css'],
})
export class StaticDataCurrencyCodesComponent implements OnInit {
  parent = '';
  title = '';
  branch = '';
  pageTitle = '';
  rowData: CurrencyRow[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data['title'] ?? '';
      this.parent = data['parent'] ?? '';
      this.branch = data['branch'] ?? '';
      this.pageTitle = this.branch ? `${this.title} (${this.branch})` : this.title;
    });
    this.loadCurrencyCodes();
  }

  private loadCurrencyCodes(): void {
    this.http.get<CurrencyRow[]>('/api/currency-codes').subscribe((data) => {
      this.rowData = data;
    });
  }
}
