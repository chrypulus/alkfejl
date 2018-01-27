package hu.elte.alkfejl.alkfejl.controller;

import hu.elte.alkfejl.alkfejl.annotation.Role;
import hu.elte.alkfejl.alkfejl.entity.Parts;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.ADMIN;
import static hu.elte.alkfejl.alkfejl.entity.User.Role.WORKER;
import hu.elte.alkfejl.alkfejl.service.PartsService;
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
@RequestMapping("/parts")
public class PartsController {
    
    @Autowired
    private PartsService partsService;
    
    @Autowired
    private WorksheetService worksheetService;
    
    @Role({WORKER, ADMIN})
    @GetMapping("")
    public ResponseEntity<Iterable<Parts>> listAll() {
        return ResponseEntity.ok(partsService.listAll());
    }
    
    @Role({WORKER, ADMIN})
    @GetMapping("/list/{id}")
    public ResponseEntity<Iterable<Parts>> list(@PathVariable long id) {
        return ResponseEntity.ok(partsService.listByWorksheet(worksheetService.getById(id)));
    }
    
    @Role({ADMIN, WORKER})
    @PostMapping("/create/{id}")
    public ResponseEntity<Parts> create(@RequestBody Parts parts, @PathVariable long id) {
        return ResponseEntity.ok(partsService.create(parts, worksheetService.getById(id)));
    }
    
    @Role({ADMIN, WORKER})
    @GetMapping("/{id}")
    private ResponseEntity<Parts> read(@PathVariable String id) {
        Parts read = partsService.read(Integer.parseInt(id));
        return ResponseEntity.ok(read);
    }

    @Role({ADMIN, WORKER})
    @PutMapping("/{id}")
    private ResponseEntity<Parts> update(@PathVariable long id, @RequestBody Parts parts) {
        Parts updated = partsService.update(id, parts);
        return ResponseEntity.ok(updated);
    }

    @Role({ADMIN, WORKER})
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable long id) {
        partsService.delete(id);
        return ResponseEntity.ok().build();
    }
}