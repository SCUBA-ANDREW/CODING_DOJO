package com.andrewlee.dojosandninjas.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.andrewlee.dojosandninjas.Repositories.DojoRepo;
import com.andrewlee.dojosandninjas.Repositories.NinjaRepo;
import com.andrewlee.dojosandninjas.models.Dojo;
import com.andrewlee.dojosandninjas.models.Ninja;

@Service
public class DNService {

//	private final DojoRepo dojoRepo;
//	private final NinjaRepo ninjaRepo;
//	public DNService(DojoRepo dojoRepo, NinjaRepo ninjaRepo) {
//		super();
//		this.dojoRepo = dojoRepo;
//		this.ninjaRepo = ninjaRepo;
//	}
	
	@Autowired
	private DojoRepo dojoRepo;
	
	@Autowired
	private NinjaRepo ninjaRepo;

	
	// create dojos
	public Dojo saveDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	
	
	// create ninjas
	public Ninja saveNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	
	
	//find all dojos
	public List<Dojo> allDojos(){
		return dojoRepo.findAll();
	}
	
	public Dojo idDojo(Long id){
		Optional<Dojo> spDojo = dojoRepo.findById(id);
		if(spDojo.isPresent()) {
			return spDojo.get();
		}
		else {
			return null;
		}
	}
	
	
	//find all ninjas
	public List<Ninja> allNinjas(){
		return ninjaRepo.findAll();
	}
	
	
}
