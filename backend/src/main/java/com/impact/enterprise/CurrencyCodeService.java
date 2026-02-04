package com.impact.enterprise;

import java.util.List;
import org.springframework.stereotype.Service;

@Service
public class CurrencyCodeService {
  private final CurrencyCodeRepository repository;

  public CurrencyCodeService(CurrencyCodeRepository repository) {
    this.repository = repository;
  }

  public List<CurrencyCodeDto> fetchAllCurrencies() {
    return repository.fetchAllCurrencies();
  }
}
