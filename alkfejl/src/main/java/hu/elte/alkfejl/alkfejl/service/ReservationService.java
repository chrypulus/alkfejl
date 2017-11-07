package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.User.Role;
import hu.elte.alkfejl.alkfejl.repository.ReservationRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;

public class ReservationService {

    @Autowired
    private ReservationRepository reservationRepository;
    
    
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

    public Reservation create(Reservation reservation, User user) {
        reservation.setPartner(user);
        return reservationRepository.save(reservation);
    }

    public Iterable<Reservation> listByRole(User user) {
        Role role = user.getRole();
        if (null != role) switch (role) {
            case PARTNER:
                return reservationRepository.findAllByUser(user);
            case ADMIN:
                return reservationRepository.findAll();
            case WORKER:
                return reservationRepository.findAll();
            default:
                break;
        }
        return Collections.emptyList();
    }
    
}
