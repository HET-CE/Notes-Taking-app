package com.hetpatel.notes.controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hetpatel.notes.entity.Notes;
import com.hetpatel.notes.service.NoteService;

@CrossOrigin(origins="http://localhost:3000")
@RestController
@RequestMapping("/api")
public class NotesController {

	public NoteService notesService;

	public NotesController(NoteService notesService) {
		this.notesService = notesService;
	}
	
	@GetMapping("/notes")
	public List<Notes> getNotes(){
		return notesService.findAll();
	}
	
	@GetMapping("/notes/{id}")
	public Notes getnoteById(@PathVariable long id) {
		return notesService.findById(id);
	}
	
	@DeleteMapping("/notes/{id}")
	public void deleteNote(@PathVariable long id) {
		notesService.deleteById(id);
	}
	
	@PostMapping("/notes")
	public void saveNote(@RequestBody Notes note) {
		notesService.save(note);
	}
		
	@PutMapping("/notes/{id}")
	public Notes updateNote(@PathVariable long id, @RequestBody Notes noteDetails) {
		Notes note = notesService.findById(id);
		
		note.setNote(noteDetails.getNote());
		note.setCreatedAt(noteDetails.getCreatedAt());
		
		notesService.save(note);
		return note;
	}
}
