package com.impact.enterprise.dto;

public record CurrencyCodeDto(
    int id,
    String currencyCode,
    String country,
    String updatedBy,
    String updatedOn,
    String checkedBy,
    String checkedOn
) {}
