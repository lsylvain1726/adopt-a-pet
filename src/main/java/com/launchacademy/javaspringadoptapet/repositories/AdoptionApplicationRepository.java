package com.launchacademy.javaspringadoptapet.repositories;

import com.launchacademy.javaspringadoptapet.models.AdoptionApplication;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface AdoptionApplicationRepository extends PagingAndSortingRepository<AdoptionApplication, Integer> {

}
