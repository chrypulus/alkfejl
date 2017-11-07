package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.Parts;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.repository.PartsRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class PartsService {
    
    @Autowired
    private PartsRepository partsRepository;
    
    public Parts read(long id) {
        return partsRepository.findOne(id);
    }

    public Parts update(long id, Parts parts) {
        Parts currentParts = partsRepository.findOne(id);
        
        currentParts.setName(parts.getName());
        currentParts.setPrice(parts.getPrice());
        currentParts.setWsId(parts.getWsId());
        
        return partsRepository.save(currentParts);
    }

    public void delete(long id) {
        partsRepository.delete(id);
    }

    public Parts create(Parts parts, Worksheet worksheet) {
        parts.setWsId(worksheet.getId());
        return partsRepository.save(parts);
    }

    public Iterable<Parts> listByWorksheet(Worksheet worksheet) {
        return partsRepository.findAllByWsId(worksheet.getId());
    }
    
}
