package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.service.UserService;
import hu.elte.alkfejl.alkfejl.annotation.Role;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;

import hu.elte.alkfejl.alkfejl.entity.Parts;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.service.WorksheetService;
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
@RequestMapping("/worksheet")
public class WorksheetController {
    
    @Autowired
    private WorksheetService worksheetService;
    
    @Autowired
    private UserService userService;
    
    @Role({WORKER, ADMIN})
    @GetMapping("")
    public ResponseEntity<Iterable<Worksheet>> list() {
        return ResponseEntity.ok(worksheetService.listByRole(userService.getLoggedInUser()));
    }
    
    @Role({ADMIN, WORKER})
    @PostMapping("")
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

    //Alkatrész hozzáadása worksheethez

    @Role({ADMIN, WORKER})
    @PutMapping("/parts/{id}")
    private ResponseEntity<Worksheet> addPart(@PathVariable long id, @RequestBody Parts part) {
        System.out.println("Add part to worksheet request arrived: worksheetId: "+id +" partId: "+part.getId());
        Worksheet updated = worksheetService.addPart(id, part);
        return ResponseEntity.ok(updated);
    }

    //Alkatrész eltávolítása worksheetből

    @Role({ADMIN, WORKER})
    @DeleteMapping("/parts/{id}")
    private ResponseEntity<Worksheet> deletePart(@PathVariable long id, @RequestBody Parts part) {
        Worksheet updated = worksheetService.deletePart(id, part);
        return ResponseEntity.ok(updated);
    }
}
