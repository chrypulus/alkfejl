package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.Parts;
import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.repository.WorksheetRepository;
import hu.elte.alkfejl.alkfejl.repository.PartsRepository;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorksheetService {

    @Autowired
    private WorksheetRepository worksheetRepository;

    @Autowired
    private PartsRepository partsRepository;
    
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

    //Munkalap sima létrehozása foglalás alapján

    public Worksheet createSimple(Reservation r) {
        Worksheet w = new Worksheet();
        w.setPartner(r.getPartner());
        w.setWorker(r.getWorker());
        w.setParts(new ArrayList<Parts>());
        w.setReservation(r);
        return worksheetRepository.save(w);
    }

    //Alkatrész hozzáadása worksheethez

    public Worksheet addPart(long id, Parts part) {
        Worksheet w = worksheetRepository.findOne(id);
        part = partsRepository.findOne(part.getId());
        List<Worksheet> partsWS = part.getWorksheet();
        if(partsWS == null){
            partsWS = new ArrayList<Worksheet>();
        }
        partsWS.add(w);
        part.setWorksheet(partsWS);
        part = partsRepository.save(part);
        w.getParts().add(part);
        return worksheetRepository.save(w);
    }

    //Alkatrész törlése worksheetből

    public Worksheet deletePart(long id, Parts part) {
        Worksheet w = worksheetRepository.findOne(id);
        w.getParts().remove(part);
        return worksheetRepository.save(w);
    }
}
