package ch.zhaw.sml.iwi.meng.workouttracker.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class VueRouterConfiguration implements WebMvcConfigurer {

 

    @Override
    public void addViewControllers(ViewControllerRegistry registry) {
        // Forward routes to index.html, excluding: /webjars/**, /api/**, /**.ico, /**.js, /**.html, **/*.js.map, **/*.css, and **/*.css.map
        registry.addViewController("/**")
                .setViewName("forward:/index.html");
    }
}