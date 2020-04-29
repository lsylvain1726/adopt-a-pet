package com.launchacademy.javaspringadoptapet.controllers;

    import com.launchacademy.javaspringadoptapet.models.SurrenderPet;
    import com.launchacademy.javaspringadoptapet.repositories.SurrenderPetRepository;
    import javax.validation.Valid;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.validation.BindingResult;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.ModelAttribute;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PetTypeController {

    private SurrenderPetRepository surrenderPetRepo;

    @Autowired
    public void setSurrenderPetRepo(SurrenderPetRepository surrenderPetRepo) {
        this.surrenderPetRepo = surrenderPetRepo;
    }

    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }

//    @GetMapping("/pets/new")
//    public String addSong(Model model) {
//        SurrenderPet petSurrender = new SurrenderPet();
//        model.addAttribute("pet", petSurrender);
//        return "pets/new";
//    }
//
//    @PostMapping
//    public String postSong(@ModelAttribute @Valid SurrenderPet surrenderPet, BindingResult bindingResult, Model model) {
//        if(bindingResult.hasErrors()) {
//            return "pets/new";
//        } else {
//            surrenderPetRepo.save(surrenderPet);
//            return "redirect:/pets";
//        }
//    }

}
