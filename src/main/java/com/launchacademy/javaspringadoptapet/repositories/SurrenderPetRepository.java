package com.launchacademy.javaspringadoptapet.repositories;

import com.launchacademy.javaspringadoptapet.models.SurrenderPet;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

public interface SurrenderPetRepository extends PagingAndSortingRepository<SurrenderPet, Integer> {

}
