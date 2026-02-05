package com.impact.enterprise.controller;

import com.impact.enterprise.service.CurrencyCodeService;
import com.impact.enterprise.dto.CurrencyCodeDto;
import java.util.List;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CurrencyCodeController {
  private final CurrencyCodeService service;

  public CurrencyCodeController(CurrencyCodeService service) {
    this.service = service;
  }

  @GetMapping("/api/currency-codes")
  public List<CurrencyCodeDto> currencyCodes() {
    return service.fetchAllCurrencies();
  }
}
