package com.launchacademy.javaspringadoptapet.controllers.api.v1;

import com.launchacademy.javaspringadoptapet.models.AdoptablePet;
import com.launchacademy.javaspringadoptapet.repositories.AdoptablePetRepository;
import java.util.Optional;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/adoptable_pets")
public class AdoptablePetRestController {
  private AdoptablePetRepository adoptablePetRepo;

  @Autowired
  public void setAdoptablePetRepo(AdoptablePetRepository adoptablePetRepo) {
    this.adoptablePetRepo = adoptablePetRepo;
  }

  @NoArgsConstructor
  private class UrlNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class UrlNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(UrlNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String urlNotFoundHandler(UrlNotFoundException ex) {
      return ex.getMessage();
    }
  }

  @GetMapping
  public Iterable<AdoptablePet> listAdoptablePets() {
    return adoptablePetRepo.findAll();
  }

  @GetMapping("{type}")
  public Iterable<AdoptablePet> listAdoptablePetsByType(@PathVariable String type) {
    return adoptablePetRepo.findAllBytype(type);
  }

  @GetMapping("{type}/{id}")
  public AdoptablePet getAdoptablePet(@PathVariable Integer id) {
    return adoptablePetRepo.findById(id).orElseThrow(() -> new UrlNotFoundException());
  }
}
