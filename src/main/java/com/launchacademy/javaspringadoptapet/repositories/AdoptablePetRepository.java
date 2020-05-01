package com.launchacademy.javaspringadoptapet.repositories;

import com.launchacademy.javaspringadoptapet.models.AdoptablePet;
import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;

public interface AdoptablePetRepository extends PagingAndSortingRepository<AdoptablePet, Integer> {

  @Query("SELECT a FROM AdoptablePet a JOIN PetType p ON a.typeId = p.id WHERE p.type = :type")
  public List<AdoptablePet> findAllBytype(@Param("type") String type);

  @Query("SELECT a FROM AdoptablePet a JOIN PetType p ON a.typeId = p.id WHERE p.type = :type AND a.id = :id")
  public AdoptablePet findByTypeAndId(@Param("type") String type, @Param("id") Integer id);
}
