package com.hetpatel.notes.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.hetpatel.notes.dao.NotesRepository;
import com.hetpatel.notes.entity.Notes;

@Service
public class NoteServiceImpl implements NoteService {


	private NotesRepository notesRepository;
	
	public NoteServiceImpl(NotesRepository theNotesRepository) {
		notesRepository = theNotesRepository;
	}
	
	@Override
	public List<Notes> findAll() {
		return notesRepository.findAll();
	}

	@Override
	public void save(Notes note) {
		notesRepository.save(note);
	}

	@Override
	public void deleteById(long id) {
		notesRepository.deleteById(id);
	}

	@Override
	public Notes findById(long id) {
		Optional<Notes> result = notesRepository.findById(id);
		
		Notes theNote = null;
		
		if(result.isPresent()) {
			theNote = result.get();
		}
		
		return theNote;
	}

	@Override
	public Notes update(long id, Notes note) {
		return notesRepository.save(note);
	}

}
