package hu.elte.alkfejl.alkfejl.entity;

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Reservation")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @OneToOne(targetEntity = User.class)
    private User partner;
    
    @Column(nullable = false)
    private Date date;
    
    @OneToOne(targetEntity = User.class)
    private User worker;
    
    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;
    
    @Column(nullable = true)
    private String comment;
}
