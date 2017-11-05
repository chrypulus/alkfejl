package hu.elte.alkfejl.alkfejl.entity;

import java.util.List;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

public class Worksheet {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @OneToOne(targetEntity = User.class)
    private User partner;
    
    @OneToOne(targetEntity = User.class)
    private User worker;
    
    @OneToMany(targetEntity = Parts.class)
    private List<Parts> parts;
}
