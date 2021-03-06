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
@Table(name = "adoption_applications")
@Getter
@Setter
@NoArgsConstructor
public class AdoptionApplication {
  @Id
  @SequenceGenerator(name="adoption_application_generator", sequenceName="adoption_applications_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="adoption_application_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="name")
  private String name;

  @Column(name="phone_number")
  private String phoneNumber;

  @Column(name="email")
  private String email;

  @Column(name="home_status")
  private String homeStatus;

  @Column(name="application_status")
  private String applicationStatus;

  @ManyToOne
  @JoinColumn(name="pet_id", nullable = false)
  private AdoptablePet adoptablePet;
}

