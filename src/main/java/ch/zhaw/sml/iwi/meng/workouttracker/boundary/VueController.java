package ch.zhaw.sml.iwi.meng.workouttracker.boundary;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class VueController {
    @RequestMapping({ "/**/{path:[^\\.]*}" })
    public String redirect() {
        return "forward:/";
    }
}