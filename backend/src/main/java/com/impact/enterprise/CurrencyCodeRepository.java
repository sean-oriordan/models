package com.impact.enterprise;

import jakarta.persistence.EntityManager;
import jakarta.persistence.ParameterMode;
import jakarta.persistence.PersistenceContext;
import jakarta.persistence.StoredProcedureQuery;
import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Repository;

@Repository
public class CurrencyCodeRepository {
  @PersistenceContext
  private EntityManager entityManager;

  public List<CurrencyCodeDto> fetchAllCurrencies() {
    StoredProcedureQuery sp = entityManager.createStoredProcedureQuery("dbo.usp_FetchAllCurrencies");
    sp.registerStoredProcedureParameter("isPending", Integer.class, ParameterMode.IN);
    sp.setParameter("isPending", 0);

    @SuppressWarnings("unchecked")
    List<Object[]> rows = sp.getResultList();

    List<CurrencyCodeDto> results = new ArrayList<>();
    for (Object[] row : rows) {
      results.add(mapRow(row));
    }
    return results;
  }

  private CurrencyCodeDto mapRow(Object[] row) {
    // Expected order: id, currencyCode, country, updatedBy, updatedOn, checkedBy, checkedOn
    return new CurrencyCodeDto(
        toInt(row, 0),
        toString(row, 1),
        toString(row, 2),
        toString(row, 3),
        toString(row, 4),
        toString(row, 5),
        toString(row, 6)
    );
  }

  private int toInt(Object[] row, int index) {
    if (row.length <= index || row[index] == null) {
      return 0;
    }
    if (row[index] instanceof Number number) {
      return number.intValue();
    }
    return Integer.parseInt(row[index].toString());
  }

  private String toString(Object[] row, int index) {
    if (row.length <= index || row[index] == null) {
      return "";
    }
    return row[index].toString();
  }
}
