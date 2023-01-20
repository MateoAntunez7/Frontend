package com.portfolio.aem.Interface;

import com.portfolio.aem.Entity.Persona;
import java.util.List;


public interface IPersonaService {
    //Traer lista de Persona
    public List<Persona> getPersona();
    
    //Save Persona
    public void savePersona(Persona persona);
    
    //Eliminar objeto por id
    public void deletePersona(Long id);
    
    //buscar una persona por id
    public Persona findPersona(Long id);
    
}
