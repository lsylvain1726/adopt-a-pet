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
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="pet_surrender_applications")
@Getter
@Setter
@NoArgsConstructor
public class SurrenderPet {

  @Id
  @SequenceGenerator(name="pet_surrender_generator", sequenceName="pet_surrender_applications_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="pet_surrender_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

//  @ManyToOne
//  @JoinColumn(name="pet_type_id", nullable = false)
//  private PetType petType;

  @Column(name="pet_type_id", nullable=false)
  private Integer petTypeId;

  @Column(name="name")
  private String name;

  @Column(name="phone_number")
  private String phoneNumber;

  @Column(name="email")
  private String email;

  @Column(name="pet_name")
  private String petName;

  @Column(name="pet_age")
  private Integer petAge;

  @Column(name="pet_image_url")
  private String petImageUrl;

  @Column(name="vaccination_status")
  private Boolean vaccinationStatus;

  @Column(name="application_status")
  private String applicationStatus;

}
