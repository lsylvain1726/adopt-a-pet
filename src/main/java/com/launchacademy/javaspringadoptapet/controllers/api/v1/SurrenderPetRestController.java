package com.launchacademy.javaspringadoptapet.controllers.api.v1;

import com.launchacademy.javaspringadoptapet.models.SurrenderPet;
import com.launchacademy.javaspringadoptapet.repositories.SurrenderPetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/surrender_pets")
public class SurrenderPetRestController {

  private SurrenderPetRepository surrenderPetRepo;

  @Autowired
  public void setSurrenderPetRepo(SurrenderPetRepository surrenderPetRepo) {
    this.surrenderPetRepo = surrenderPetRepo;
  }

  private class SurrenderNotFoundException extends RuntimeException {};

  @ControllerAdvice
  private class SurrenderNotFoundAdvice {
    @ResponseBody
    @ExceptionHandler(SurrenderNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    String urlNotFoundHandler(SurrenderNotFoundException ex) {
      return ex.getMessage();
    }
  }

  private class InvalidSurrenderException extends RuntimeException {};
  @ControllerAdvice
  private class InvalidContractorAdvice {
    @ResponseBody
    @ExceptionHandler(InvalidSurrenderException.class)
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    String invalidContractor(InvalidSurrenderException ic) {
      return "";
    }
  }

  @GetMapping
  public Iterable<SurrenderPet> getList() {
    return surrenderPetRepo.findAll();
  }

  @PostMapping
  public SurrenderPet create(@RequestBody @ModelAttribute SurrenderPet surrenderPet, BindingResult bindingResult) {
    if(bindingResult.hasErrors()) {
      throw new InvalidSurrenderException();
    } else {
      return surrenderPetRepo.save(surrenderPet);
    }
  }
}
