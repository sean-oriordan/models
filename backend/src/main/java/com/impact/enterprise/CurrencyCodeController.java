package com.impact.enterprise;

import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CurrencyCodeController {
  @GetMapping("/api/currency-codes")
  public List<CurrencyCode> currencyCodes() {
    return List.of(
        new CurrencyCode(1, "USD", "United States", "system", "2025-11-15", "system", "2025-11-20"),
        new CurrencyCode(2, "EUR", "Eurozone", "system", "2025-10-08", "system", "2025-10-12"),
        new CurrencyCode(3, "GBP", "United Kingdom", "system", "2025-12-02", "system", "2025-12-05"),
        new CurrencyCode(4, "JPY", "Japan", "system", "2025-09-18", "system", "2025-09-22"),
        new CurrencyCode(5, "AUD", "Australia", "system", "2025-08-10", "system", "2025-08-14"),
        new CurrencyCode(6, "CAD", "Canada", "system", "2025-07-30", "system", "2025-08-02"),
        new CurrencyCode(7, "CHF", "Switzerland", "system", "2025-06-12", "system", "2025-06-16"),
        new CurrencyCode(8, "SGD", "Singapore", "system", "2025-05-01", "system", "2025-05-04")
    );
  }

  public record CurrencyCode(
      int id,
      String currencyCode,
      String country,
      String updatedBy,
      String updatedOn,
      String checkedBy,
      String checkedOn
  ) {}
}
