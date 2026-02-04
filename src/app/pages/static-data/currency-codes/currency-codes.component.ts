import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';

interface CurrencyRow {
  id: number;
  code: string;
  country: string;
  updatedBy: string;
  updatedOn: string;
  checkedBy: string;
  checkedOn: string;
}

const CURRENCY_DATA: CurrencyRow[] = [
  {
    id: 1,
    code: 'USD',
    country: 'United States',
    updatedBy: 'system',
    updatedOn: '2025-11-15',
    checkedBy: 'system',
    checkedOn: '2025-11-20',
  },
  {
    id: 2,
    code: 'EUR',
    country: 'Eurozone',
    updatedBy: 'system',
    updatedOn: '2025-10-08',
    checkedBy: 'system',
    checkedOn: '2025-10-12',
  },
  {
    id: 3,
    code: 'GBP',
    country: 'United Kingdom',
    updatedBy: 'system',
    updatedOn: '2025-12-02',
    checkedBy: 'system',
    checkedOn: '2025-12-05',
  },
  {
    id: 4,
    code: 'JPY',
    country: 'Japan',
    updatedBy: 'system',
    updatedOn: '2025-09-18',
    checkedBy: 'system',
    checkedOn: '2025-09-22',
  },
  {
    id: 5,
    code: 'AUD',
    country: 'Australia',
    updatedBy: 'system',
    updatedOn: '2025-08-10',
    checkedBy: 'system',
    checkedOn: '2025-08-14',
  },
  {
    id: 6,
    code: 'CAD',
    country: 'Canada',
    updatedBy: 'system',
    updatedOn: '2025-07-30',
    checkedBy: 'system',
    checkedOn: '2025-08-02',
  },
  {
    id: 7,
    code: 'CHF',
    country: 'Switzerland',
    updatedBy: 'system',
    updatedOn: '2025-06-12',
    checkedBy: 'system',
    checkedOn: '2025-06-16',
  },
  {
    id: 8,
    code: 'SGD',
    country: 'Singapore',
    updatedBy: 'system',
    updatedOn: '2025-05-01',
    checkedBy: 'system',
    checkedOn: '2025-05-04',
  },
];

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
  displayedColumns: string[] = [
    'id',
    'code',
    'country',
    'updatedBy',
    'updatedOn',
    'checkedBy',
    'checkedOn',
  ];
  dataSource = new MatTableDataSource<CurrencyRow>(CURRENCY_DATA);

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data) => {
      this.title = data['title'] ?? '';
      this.parent = data['parent'] ?? '';
      this.branch = data['branch'] ?? '';
      this.pageTitle = this.branch ? `${this.title} (${this.branch})` : this.title;
    });

    this.dataSource.filterPredicate = (row: CurrencyRow, filter: string) => {
      const search = filter.trim().toLowerCase();
      return (
        row.code.toLowerCase().includes(search) ||
        row.country.toLowerCase().includes(search) ||
        row.updatedBy.toLowerCase().includes(search) ||
        row.checkedBy.toLowerCase().includes(search)
      );
    };
  }

  applyFilter(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
  }
}
