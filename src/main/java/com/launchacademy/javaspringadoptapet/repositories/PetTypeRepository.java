package com.launchacademy.javaspringadoptapet.repositories;

import com.launchacademy.javaspringadoptapet.models.PetType;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface PetTypeRepository extends PagingAndSortingRepository<PetType, Integer> {

}
