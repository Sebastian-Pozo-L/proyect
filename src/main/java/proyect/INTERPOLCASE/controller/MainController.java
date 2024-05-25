package proyect.INTERPOLCASE.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/login")
    public String login() {
        return "/views/pages/LoRe/login";
    }

    @GetMapping("/INTERPOLcase")
    public String index() {
        return "INTERPOLcase";
    }

    @GetMapping("/portal")
    public String portal() {
        return "/views/pages/PortalINTERPOL/portal";
    }
}
