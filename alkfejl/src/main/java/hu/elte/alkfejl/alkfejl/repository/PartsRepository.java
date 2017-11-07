package hu.elte.alkfejl.alkfejl.repository;

import hu.elte.alkfejl.alkfejl.entity.Parts;
import org.springframework.data.repository.CrudRepository;

public interface PartsRepository extends CrudRepository<Parts, Long>{

    public Iterable<Parts> findAllByWsId(long id);
    
}
