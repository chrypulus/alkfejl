package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.Parts;
import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.User.Role;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import hu.elte.alkfejl.alkfejl.repository.ReservationRepository;
import hu.elte.alkfejl.alkfejl.repository.WorksheetRepository;
import java.util.ArrayList;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    
    @Autowired
    private WorksheetRepository worksheetRepository;
    
    public Reservation read(long id) {
        return reservationRepository.findOne(id);
    }

    public Reservation update(long id, Reservation reservation) {
        Reservation currentReservation = reservationRepository.findOne(id);

        currentReservation.setPartner(reservation.getPartner());
        currentReservation.setDate(reservation.getDate());
        currentReservation.setWorker(reservation.getWorker());
        currentReservation.setCategory(reservation.getCategory());
        currentReservation.setComment(reservation.getComment());
        
        return reservationRepository.save(currentReservation);
    }

    public void delete(long id) {
        reservationRepository.delete(id);
    }

    public Reservation create(Reservation r, User partner) {
        //if(partner.getRole() != Role.ADMIN) {
        //    r.setPartner(partner);
        //}
        Worksheet w = new Worksheet();
        w.setPartner(r.getPartner());
        w.setWorker(r.getWorker());
        w.setParts(new ArrayList<Parts>());
        w.setReservation(null);
        //System.out.println("Worksheet to create: "+w.toString());
        w = worksheetRepository.save(w);
        r.setWorksheet(null);
        r = reservationRepository.save(r);
        //System.out.println("Worksheet created: "+w.toString());
        r.setWorksheet(w);
        w.setReservation(r);
        w = worksheetRepository.save(w);
        r = reservationRepository.save(r);
        //System.out.println("Reservation and worksheet created: "+r.getId() + " " + r.getWorksheet().getId() + " "+w.getId());
        return r;
    }

    public Iterable<Reservation> listByRole(User partner) {
        /*
        Role role = partner.getRole();
        if (null != role) switch (role) {
            case PARTNER:
                return reservationRepository.findAllByPartner(partner);
            case ADMIN:
                return reservationRepository.findAll();
            case WORKER:
                return reservationRepository.findAll();
            default:
                break;
        }
        return Collections.emptyList();
        */
        return reservationRepository.findAll();
    }
}
