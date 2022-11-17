package com.victor.dsMeta.services;



import java.time.Instant;
import java.time.LocalDate;
import java.time.ZoneId;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.victor.dsMeta.entities.Sale;
import com.victor.dsMeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	
	public Page<Sale> findSale(Pageable pageable, String minDate, String maxDate) {
		
		LocalDate today =  LocalDate.ofInstant(Instant.now(), ZoneId.systemDefault()) ;
		
		LocalDate min = minDate.equals("") ? today.minusYears(1) : LocalDate.parse(minDate);
		LocalDate max = maxDate.equals("") ? today : LocalDate.parse(maxDate);
		
		
		
		return repository.findSales(min,max,pageable);
	}
	
}
