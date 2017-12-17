package hu.elte.alkfejl.alkfejl.entity;

import java.io.Serializable;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "Worksheet")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Worksheet implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    
    @OneToOne(targetEntity = User.class)
    private User partner;
    
    @OneToOne(targetEntity = User.class)
    private User worker;
    
    @ManyToMany(mappedBy = "worksheet")
    private List<Parts> parts;
}
