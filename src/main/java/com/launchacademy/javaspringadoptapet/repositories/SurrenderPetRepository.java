package com.launchacademy.javaspringadoptapet.repositories;

import com.launchacademy.javaspringadoptapet.models.SurrenderPet;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface SurrenderPetRepository extends PagingAndSortingRepository<SurrenderPet, Integer> {

}
