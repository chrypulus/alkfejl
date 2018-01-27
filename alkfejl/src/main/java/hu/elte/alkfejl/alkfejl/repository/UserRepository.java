package hu.elte.alkfejl.alkfejl.repository;

import hu.elte.alkfejl.alkfejl.entity.User;
import java.util.List;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long>{
    Optional<User> findByUsernameAndPassword(String username, String password);
    Optional<User> findByUsername(String username);
    Iterable<User> findByRole(User.Role role);
    
}