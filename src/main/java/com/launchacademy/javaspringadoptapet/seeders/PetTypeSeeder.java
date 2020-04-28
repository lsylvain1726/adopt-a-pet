package com.launchacademy.javaspringadoptapet.seeders;

import com.launchacademy.javaspringadoptapet.models.AdoptablePet;
import com.launchacademy.javaspringadoptapet.models.PetType;
import com.launchacademy.javaspringadoptapet.repositories.AdoptablePetRepository;
import com.launchacademy.javaspringadoptapet.repositories.PetTypeRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class PetTypeSeeder implements CommandLineRunner {
  private PetTypeRepository petTypeRepo;

  @Autowired
  public void setPetTypeRepo(PetTypeRepository petTypeRepo) {
    this.petTypeRepo = petTypeRepo;
  }

  private AdoptablePetRepository adoptablePetRepo;

  @Autowired
  public void setAdoptablePetRepository(AdoptablePetRepository adoptablePetRepo) {
    this.adoptablePetRepo = adoptablePetRepo;
  }

  @Override
  public void run(String... args) throws Exception {
    List<PetType> petTypesList = new ArrayList();
    List<AdoptablePet> adoptablePetsList = new ArrayList();

    PetType petTypeOne = new PetType();
    petTypeOne.setType("dog");
    petTypeOne.setDescription("My Best Friend");
    petTypesList.add(petTypeOne);

    PetType petTypeTwo = new PetType();
    petTypeTwo.setType("cat");
    petTypeTwo.setDescription("My Worst Enemy");
    petTypesList.add(petTypeTwo);

    if (petTypeRepo.count() == 0) {
      for(PetType type : petTypesList) {
        petTypeRepo.save(type);
      }
    }

    AdoptablePet adoptablePetOne = new AdoptablePet();
    adoptablePetOne.setName("Coco");
    adoptablePetOne.setImgUrl("https://vetstreet-brightspot.s3.amazonaws.com/fa/50/1e58e45643a88e1e4c90b02e6ead/Why-does-my-dog-cock-his-head-155267401-335lc062513.jpg");
    adoptablePetOne.setAge(5);
    adoptablePetOne.setAdoptionStatus("no");
    adoptablePetOne.setAdoptionStory("Coco was found on the streets in the summer");
    adoptablePetOne.setVaccinationStatus(true);
    adoptablePetOne.setPetType(petTypeOne);
    adoptablePetsList.add(adoptablePetOne);

    AdoptablePet adoptablePetTwo = new AdoptablePet();
    adoptablePetTwo.setName("Max");
    adoptablePetTwo.setImgUrl("https://vetstreet-brightspot.s3.amazonaws.com/66/5c9450c1f011e0bfca0050568d6ceb/file/04-Marty-DT-425km080811.jpg");
    adoptablePetTwo.setAge(10);
    adoptablePetTwo.setAdoptionStatus("yes");
    adoptablePetTwo.setAdoptionStory("Rescued from a pet store");
    adoptablePetTwo.setVaccinationStatus(false);
    adoptablePetTwo.setPetType(petTypeOne);
    adoptablePetsList.add(adoptablePetTwo);

    AdoptablePet adoptablePetThree = new AdoptablePet();
    adoptablePetThree.setName("Zeus");
    adoptablePetThree.setImgUrl("https://www.rd.com/wp-content/uploads/2019/11/cat-19-1024x684.jpg");
    adoptablePetThree.setAge(2);
    adoptablePetThree.setAdoptionStatus("no");
    adoptablePetThree.setAdoptionStory("His mom is in retirement and can no longer take care of this fiesty little thing");
    adoptablePetThree.setVaccinationStatus(true);
    adoptablePetThree.setPetType(petTypeTwo);
    adoptablePetsList.add(adoptablePetThree);


    if (adoptablePetRepo.count() == 0) {
      for(AdoptablePet pet : adoptablePetsList) {
        adoptablePetRepo.save(pet);
      }
    }
  }
}
