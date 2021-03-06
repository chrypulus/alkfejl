package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.annotation.Role;
import hu.elte.alkfejl.alkfejl.service.UserService;
import hu.elte.alkfejl.alkfejl.entity.User;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.PARTNER;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;
import hu.elte.alkfejl.alkfejl.exception.UserNotValidException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/user")
public class UserController {
    @Autowired
    private UserService userService;
    
    @GetMapping("")
    public ResponseEntity<User> user(){
        if (userService.isLoggedIn()){
            return ResponseEntity.ok(userService.getLoggedInUser());
        }
        return ResponseEntity.badRequest().build();
    }
    
    @PostMapping("/login")
    public ResponseEntity<User> login(@RequestBody User user) {
        try {
            return ResponseEntity.ok(userService.login(user));            
        }
        catch (UserNotValidException e) {
            return ResponseEntity.badRequest().build();
        }
    }
	
    @Role({WORKER, PARTNER, ADMIN})
    @GetMapping("/users")
    public ResponseEntity<Iterable<User>> listAll() {
        return ResponseEntity.ok(userService.getAll());
    }
    
    @Role({WORKER, PARTNER, ADMIN})
    @GetMapping("/workers")
    public ResponseEntity<Iterable<User>> listWorkers() {
        return ResponseEntity.ok(userService.getWorkers());
    }
    
    @Role({WORKER, PARTNER, ADMIN})
    @GetMapping("/partners")
    public ResponseEntity<Iterable<User>> listPartners() {
        return ResponseEntity.ok(userService.getPartners());
    }
    
    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return userService.register(user);
    }
    
    @PostMapping("/logout")
    public ResponseEntity<User> logout(@RequestBody User user) {
        userService.logout();
        return ResponseEntity.ok().build();
    }
}
