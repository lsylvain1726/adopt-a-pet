package com.launchacademy.javaspringadoptapet.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="pet_types")
@Getter
@Setter
@NoArgsConstructor
public class PetType {
  @Id
  @SequenceGenerator(name="pet_type_generator", sequenceName="pet_types_id_seq", allocationSize = 1)
  @GeneratedValue(strategy= GenerationType.SEQUENCE, generator="pet_type_generator")
  @Column(name="id", nullable=false, unique=true)
  private Integer id;

  @Column(name="type")
  @NotBlank
  private String type;

  @Column(name="description")
  private String description;
}
