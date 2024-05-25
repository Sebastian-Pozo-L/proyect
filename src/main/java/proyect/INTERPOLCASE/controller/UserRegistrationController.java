package proyect.INTERPOLCASE.controller;

import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import proyect.INTERPOLCASE.models.dto.RegisterUserDTO;
import proyect.INTERPOLCASE.models.service.UserService;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@RequestMapping("/registration")
public class UserRegistrationController {

    private UserService userService;

    public UserRegistrationController(UserService userService) {
        this.userService = userService;
    }

    @ModelAttribute("user")
    public RegisterUserDTO registerDTO() {
        return new RegisterUserDTO();
    }

    @GetMapping
    public String showRegistrationForm() {
        return "/registration";
    }

    @PostMapping
    public String registerUserACcount(@ModelAttribute("user") RegisterUserDTO registerDTO) {
        userService.userSave(registerDTO);
        return "redirect:/registration?succes";
    }
}
