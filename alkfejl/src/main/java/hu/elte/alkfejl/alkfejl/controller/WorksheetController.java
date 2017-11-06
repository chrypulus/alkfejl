package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.service.UserService;
import hu.elte.alkfejl.alkfejl.annotation.Role;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.service.WorksheetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

public class WorksheetController {
    
    @Autowired
    private WorksheetService worksheetService;
    
    @Autowired
    private UserService userService;
    
    @Role({WORKER, ADMIN})
    @GetMapping
    public ResponseEntity<Iterable<Worksheet>> list() {
        return ResponseEntity.ok(worksheetService.listByName(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, WORKER})
    @PostMapping
    public ResponseEntity<Worksheet> create(@RequestBody Worksheet worksheet) {
        return ResponseEntity.ok(worksheetService.create(worksheet, userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, WORKER})
    @GetMapping("/{id}")
    private ResponseEntity<Worksheet> read(@PathVariable String id) {
        Worksheet read = worksheetService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role({ADMIN, WORKER})
    @PutMapping("/{id}")
    private ResponseEntity<Worksheet> update(@PathVariable long id, @RequestBody Worksheet worksheet) {
        Worksheet updated = worksheetService.update(id, worksheet);
        return ResponseEntity.ok(updated);
    }

    @Role({ADMIN, WORKER})
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        worksheetService.delete(id);
        return ResponseEntity.ok().build();
    }
}
