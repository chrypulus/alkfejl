package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.entity.Reservation;
import static hu.elte.alkfejl.alkfejl.entity.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.Role.PARTNER;
import static hu.elte.alkfejl.alkfejl.entity.Role.WORKER;
import hu.elte.alkfejl.alkfejl.entity.User;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.PARTNER;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Role;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    
    @Autowired
    private UserService userService;
    
    @Role({WORKER, PARTNER, ADMIN})
    @GetMapping
    public ResponseEntity<Iterable<Reservation>> list() {
        return ResponseEntity.ok(reservationService.listByRole(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @PostMapping
    public ResponseEntity<Reservation> create(@RequestBody Reservation issue) {
        return ResponseEntity.ok(reservationService.create(issue, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, USER})
    @GetMapping("/{id}")
    private ResponseEntity<Reservation> read(@PathVariable String id) {
        Reservation read = reservationService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role(ADMIN)
    @PutMapping("/{id}")
    private ResponseEntity<Reservation> update(@PathVariable long id, @RequestBody Reservation issue) {
        Reservation updated = reservationService.update(id, issue);
        return ResponseEntity.ok(updated);
    }

    @Role(ADMIN)
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        reservationService.delete(id);
        return ResponseEntity.ok().build();
    }
}