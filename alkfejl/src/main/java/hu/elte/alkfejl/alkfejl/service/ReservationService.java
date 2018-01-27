package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.User.Role;
import hu.elte.alkfejl.alkfejl.repository.ReservationRepository;
import java.util.Collections;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
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

    public Reservation create(Reservation reservation, User partner) {
        reservation.setPartner(partner);
        return reservationRepository.save(reservation);
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
