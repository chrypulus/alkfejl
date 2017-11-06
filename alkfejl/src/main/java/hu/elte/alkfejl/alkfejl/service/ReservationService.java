package hu.elte.alkfejl.alkfejl.service;

import static com.oracle.jrockit.jfr.ContentType.Timestamp;
import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.User.Role;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;

public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    
    
    public Reservation read(int id) {
        return reservationRepository.findOne(id);
    }

    public Reservation update(long id, Reservation reservation) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    public void delete(long id) {
        reservationRepository.delete(id);
    }

    public Reservation create(Reservation reservation, User user) {
        //stufftodo
        return reservationRepository.save(reservation);
    }

    public Iterable<Reservation> listByRole(User user) {
        Role role = user.getRole();
        if (role == Role.PARTNER) {
            return reservationRepository.findAllByUser(user);
        } 
        else if (role == Role.ADMIN) {
            return reservationRepository.findAll();
        }
        else if (role == Role.WORKER) {
            return reservationRepository.findAllByWorker();
        }
        return Collections.emptyList();
    }
    
}
