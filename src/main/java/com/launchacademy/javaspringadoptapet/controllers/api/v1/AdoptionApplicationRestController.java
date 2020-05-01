package com.launchacademy.javaspringadoptapet.controllers.api.v1;

import com.launchacademy.javaspringadoptapet.models.AdoptionApplication;
import com.launchacademy.javaspringadoptapet.repositories.AdoptionApplicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/adoption_applications")
public class AdoptionApplicationRestController {
  private AdoptionApplicationRepository adoptionApplicationRepo;

  @Autowired
  public void setAdoptionApplicationRepoRepo(AdoptionApplicationRepository adoptionApplicationRepo) {
    this.adoptionApplicationRepo = adoptionApplicationRepo;
  }

  private class InvalidAdoptionException extends RuntimeException {};
  @ControllerAdvice
  private class InvalidContractorAdvice {
    @ResponseBody
    @ExceptionHandler(InvalidAdoptionException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String invalidContractor(InvalidAdoptionException ic) {
      return "";
    }
  }

  @PostMapping
  public AdoptionApplication newPet(@RequestBody AdoptionApplication adoptionApplication, BindingResult bindingResult) {
    if(bindingResult.hasErrors()) {
      throw new InvalidAdoptionException();
    } else {
      return adoptionApplicationRepo.save(adoptionApplication);
    }
  }

}
