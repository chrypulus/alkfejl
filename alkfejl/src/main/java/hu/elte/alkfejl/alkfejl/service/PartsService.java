package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.Parts;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.repository.PartsRepository;
import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PartsService {
    
    @Autowired
    private PartsRepository partsRepository;
    
    public Parts read(long id) {
        return partsRepository.findOne(id);
    }

    public Parts update(long id, Parts part) {
        Parts currentPart = partsRepository.findOne(id);
        
        currentPart.setName(part.getName());
        currentPart.setPrice(part.getPrice());
        currentPart.setWorksheet(part.getWorksheet());
        
        return partsRepository.save(currentPart);
    }

    public void delete(long id) {
        partsRepository.delete(id);
    }

    public Parts create(Parts parts, Worksheet worksheet) {
        ArrayList<Worksheet> ws = new ArrayList<Worksheet>();
        ws.add(worksheet);
        parts.setWorksheet(ws);
        return partsRepository.save(parts);
    }

    public Iterable<Parts> listByWorksheet(Worksheet worksheet) {
        return partsRepository.findAllByWorksheet(worksheet);
    }
    
    public Iterable<Parts> listAll() {
        return partsRepository.findAll();
    }
}
