package hu.elte.alkfejl.alkfejl.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
public class Partner extends User{
    @Column(nullable = false)
    private String address;
    
    @Column(nullable = false)
    private int phonenumber;
    
    private Role role = Role.PARTNER;
}
