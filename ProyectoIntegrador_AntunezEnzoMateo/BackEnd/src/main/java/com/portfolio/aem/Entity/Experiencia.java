

package com.portfolio.aem.Entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity 
public class Experiencia {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private int id;
private String nombreE;
private String descripcione;

//CONSTRUCTORES

    public Experiencia(String nombreE, String descripcione) {
        this.nombreE = nombreE;
        this.descripcione = descripcione;
    }

    public Experiencia() {
    }
//getter y setter

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNombreE() {
        return nombreE;
    }

    public void setNombreE(String nombreE) {
        this.nombreE = nombreE;
    }

    public String getDescripcione() {
        return descripcione;
    }

    public void setDescripcione(String descripcione) {
        this.descripcione = descripcione;
    }
    


}
