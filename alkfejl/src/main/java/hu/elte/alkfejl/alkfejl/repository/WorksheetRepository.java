package hu.elte.alkfejl.alkfejl.repository;

import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.entity.Worksheet;
import org.springframework.data.repository.CrudRepository;

public interface WorksheetRepository extends CrudRepository<Worksheet, Long>{
    Iterable<Worksheet> findAllByPartner(User partner);
}
