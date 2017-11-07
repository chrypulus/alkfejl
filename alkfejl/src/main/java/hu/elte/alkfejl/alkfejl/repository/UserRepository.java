package hu.elte.alkfejl.alkfejl.repository;

import hu.elte.alkfejl.alkfejl.entity.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
    Optional<User> findByUsernameAndPassword(String username, String password);
    User findByUsername(String username);
}
