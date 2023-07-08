package ch.zhaw.sml.iwi.meng.workouttracker;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@SpringBootApplication
@EnableWebSecurity
@EnableGlobalMethodSecurity(prePostEnabled = true, securedEnabled = true)
public class WorkoutTracker implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(WorkoutTracker.class, args);

    }

    @Override
    public void run(String... args) throws Exception {

    }
}
