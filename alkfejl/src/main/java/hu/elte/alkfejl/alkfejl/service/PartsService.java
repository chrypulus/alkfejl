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

    //Alkatrész sima létrehozása

    public Parts createSimple(Parts parts) {
        ArrayList<Worksheet> ws = new ArrayList<Worksheet>();
        Parts p = new Parts();
        p.setPrice(parts.getPrice());
        p.setName(parts.getName());
        p.setId(-1);
        p.setWorksheet(null);
        System.out.println("Part to create: "+p.toString());
        p = partsRepository.save(parts);
        System.out.println("Part created: "+p.toString());
        p.setWorksheet(ws);
        System.out.println("Part created: "+p.toString());
        p = partsRepository.save(parts);
        for(Parts e : partsRepository.findAll()) {
            System.out.println("ID: " + e.getId() + "NAME: " + e.getName());
        }
        return p;
    }

    //Alkatrész sima módosítása

    public Parts updateSimple(Parts parts) {
        Parts currentPart = partsRepository.findOne(parts.getId());
        currentPart.setName(parts.getName());
        currentPart.setPrice(parts.getPrice());
        return partsRepository.save(currentPart);
    }
}
