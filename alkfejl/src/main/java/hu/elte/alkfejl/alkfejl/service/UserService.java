package hu.elte.alkfejl.alkfejl.service;

import hu.elte.alkfejl.alkfejl.entity.User;
import hu.elte.alkfejl.alkfejl.exception.UserNotValidException;
import hu.elte.alkfejl.alkfejl.repository.UserRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.context.annotation.SessionScope;

@Service
@SessionScope
@Data
public class UserService {

    public User user;
    
    @Autowired
    private UserRepository userRepository;
    
    public boolean isLoggedIn() {
        return user != null;
    }

    public User register(User user) {
        user.setRole(User.Role.PARTNER);
        return this.user = userRepository.save(user);
    }

    public void logout() {
        user = null;
    }

    public User login(User user) throws UserNotValidException{
        if (isValid(user)) {
            return this.user = userRepository.findByUsername(user.getUsername()).get();
        }
        throw new UserNotValidException();
    }
    
    private boolean isValid(User user) {
        return userRepository.findByUsernameAndPassword(user.getUsername(), user.getPassword()).isPresent();
    }
    
    public User getLoggedInUser() {
        return user;
    }
    
}
