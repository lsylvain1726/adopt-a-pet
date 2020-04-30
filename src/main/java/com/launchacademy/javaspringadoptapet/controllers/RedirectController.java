package com.launchacademy.javaspringadoptapet.controllers;

    import com.launchacademy.javaspringadoptapet.models.SurrenderPet;
    import com.launchacademy.javaspringadoptapet.repositories.SurrenderPetRepository;
    import javax.servlet.http.HttpServletRequest;
    import javax.validation.Valid;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.stereotype.Controller;
    import org.springframework.ui.Model;
    import org.springframework.validation.BindingResult;
    import org.springframework.web.bind.annotation.GetMapping;
    import org.springframework.web.bind.annotation.ModelAttribute;
    import org.springframework.web.bind.annotation.PostMapping;
    import org.springframework.web.bind.annotation.RequestMapping;
    import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class RedirectController {

    @GetMapping("/pets")
    public String index() {
        return "index";
    }

//    @RequestMapping(value = "/", method = RequestMethod.GET)
//    public String redirect() {
//        System.out.println("Redirecting Result To The Final Page");
//        return "redirect:pets";
//    }
//
//    @RequestMapping(value = "/pets", method = RequestMethod.GET)
//    public String finalPage() {
//        System.out.println("Showing The Redirected Page");
//        return "index";
//    }

    @GetMapping(value = "/**/{path:[^\\.]*}")
    public String forward() {
        return "forward:/";
    }



}
