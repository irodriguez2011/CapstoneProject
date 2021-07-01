package com.example.springJPA.repository;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.springJPA.entity.Note;

@Repository
public interface NotesRepository extends JpaRepository<Note, Integer> {

	
	
}
