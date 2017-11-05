package hu.elte.alkfejl.alkfejl.entity;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Data;

@Data
public class Worker extends User{
    private Role role = Role.WORKER;
}
