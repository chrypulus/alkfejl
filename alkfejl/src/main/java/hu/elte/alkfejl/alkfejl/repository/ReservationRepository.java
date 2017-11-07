package hu.elte.alkfejl.alkfejl.repository;

import hu.elte.alkfejl.alkfejl.entity.Reservation;
import hu.elte.alkfejl.alkfejl.entity.User;
import org.springframework.data.repository.CrudRepository;

public interface ReservationRepository extends CrudRepository<Reservation, Long>{

    public Iterable<Reservation> findAllByUser(User user);
    
}
