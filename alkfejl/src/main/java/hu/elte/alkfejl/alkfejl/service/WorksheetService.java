package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.repository.WorksheetRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorksheetService {

    @Autowired
    private WorksheetRepository worksheetRepository;
    
    public Worksheet read(long id) {
        return worksheetRepository.findOne(id);
    }

    public Worksheet update(long id, Worksheet worksheet) {
        Worksheet currentWorksheet = worksheetRepository.findOne(id);
        
        currentWorksheet.setPartner(worksheet.getPartner());
        currentWorksheet.setWorker(worksheet.getWorker());
        currentWorksheet.setParts(worksheet.getParts());
        
        return worksheetRepository.save(currentWorksheet);
    }

    public void delete(long id) {
        worksheetRepository.delete(id);
    }
    
    public Worksheet create(Worksheet worksheet, User worker) {
        worksheet.setWorker(worker);
        return worksheetRepository.save(worksheet);
    }

    public Iterable<Worksheet> listByRole(User partner) {
        /*
        User.Role role = partner.getRole();
        if (null != role) switch (role) {
            case PARTNER:
                return worksheetRepository.findAllByPartner(partner);
            case ADMIN:
                return worksheetRepository.findAll();
            case WORKER:
                return worksheetRepository.findAll();
            default:
                break;
        }
        return Collections.emptyList();
        */
        return worksheetRepository.findAll();
    }

    public Worksheet getById(long id) {
        return worksheetRepository.findOne(id); 
    }
}
