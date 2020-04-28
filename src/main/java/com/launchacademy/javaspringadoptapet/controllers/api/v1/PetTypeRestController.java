package com.launchacademy.javaspringadoptapet.controllers.api.v1;

import com.launchacademy.javaspringadoptapet.models.PetType;
import com.launchacademy.javaspringadoptapet.repositories.PetTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/pet_types")
public class PetTypeRestController {
  private PetTypeRepository petTypeRepo;

  @Autowired
  public void setPetTypeRepo(PetTypeRepository petTypeRepo) {
    this.petTypeRepo = petTypeRepo;
  }

  @GetMapping
  public Iterable<PetType> listPetTypes() {
    return petTypeRepo.findAll();
  }
}
