package com.example.springJPA.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.springJPA.entity.Note;
import com.example.springJPA.repository.NotesRepository;

//Controller listens to requests coming in

@CrossOrigin (origins="http://localhost:3000")
@RestController
@RequestMapping("/api/")
public class NotesController {

	@Autowired
	private NotesRepository notesRepo;
	
	@GetMapping("/notes")
	public List<Note> getNotes() {
		return notesRepo.findAll();
	}
	
	
	@PostMapping("/notes")
	public ResponseEntity <Note> createNote(@RequestBody Note note) {
		return new ResponseEntity<Note>(notesRepo.save(note), HttpStatus.CREATED);
	}
	 
	@GetMapping("/notes/{id}")
	public ResponseEntity<Note> readNote(@PathVariable int id) {
		return new ResponseEntity<Note>(notesRepo.findById(id).get(),HttpStatus.OK);
	}
	
	@DeleteMapping("/notes/{id}")
	public ResponseEntity<HttpStatus> deleteNote(@PathVariable int id) {
		notesRepo.deleteById(id);
		return new ResponseEntity<HttpStatus>(HttpStatus.NO_CONTENT);
	}
	
	
	@PutMapping("/notes")
	public ResponseEntity<Note> updateNote (@RequestBody Note note) {
		return new ResponseEntity<Note>(notesRepo.save(note), HttpStatus.OK);
	}
	
	
	/*
	public ResponseEntity<List<Note>> readNotes () {
		return new ResponseEntity<List<Note>>(notesRepo.findAll(), HttpStatus.OK);
	}
	*/
	
	
}
