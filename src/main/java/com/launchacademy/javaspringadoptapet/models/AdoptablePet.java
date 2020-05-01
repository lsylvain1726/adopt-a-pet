package com.launchacademy.javaspringadoptapet.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="adoptable_pets")
@Getter
@Setter
@NoArgsConstructor
public class AdoptablePet {
  @Id
  @SequenceGenerator(name="adoptable_pet_generator", sequenceName="adoptable_pets_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="adoptable_pet_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="name")
  @NotBlank
  private String name;

  @ManyToOne
  @JoinColumn(name="type_id", nullable = false)
  private PetType petType;

  @Column(name="type_id", nullable=false, insertable = false, updatable = false)
  private Integer typeId;

  @Column(name="img_url")
  @NotBlank
  private String imgUrl;

  @Column(name="age")
  @NotNull
  private Integer age;

  @Column(name="vaccination_status")
  @NotNull
  private Boolean vaccinationStatus;

  @Column(name="adoption_story")
  @NotBlank
  private String adoptionStory;

  @Column(name="adoption_status")
  @NotBlank
  private String adoptionStatus;

}



