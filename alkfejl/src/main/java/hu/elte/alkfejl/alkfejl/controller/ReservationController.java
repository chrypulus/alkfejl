package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.service.UserService;
import hu.elte.alkfejl.alkfejl.annotation.Role;
import hu.elte.alkfejl.alkfejl.entity.Reservation;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.PARTNER;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    
    @Autowired
    private UserService userService;
    
    @Role({WORKER, PARTNER, ADMIN})
    @GetMapping("")
    public ResponseEntity<Iterable<Reservation>> list() {
        return ResponseEntity.ok(reservationService.listByRole(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, WORKER, PARTNER})
    @PostMapping("")
    public ResponseEntity<Reservation> create(@RequestBody Reservation reservation) {
        return ResponseEntity.ok(reservationService.create(reservation, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, WORKER, PARTNER})
    @GetMapping("/{id}")
    private ResponseEntity<Reservation> read(@PathVariable String id) {
        Reservation read = reservationService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role({ADMIN, WORKER, PARTNER})
    @PutMapping("/{id}")
    private ResponseEntity<Reservation> update(@PathVariable long id, @RequestBody Reservation reservation) {
        Reservation updated = reservationService.update(id, reservation);
        return ResponseEntity.ok(updated);
    }

    @Role({ADMIN, WORKER, PARTNER})
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        reservationService.delete(id);
        return ResponseEntity.ok().build();
    }
}