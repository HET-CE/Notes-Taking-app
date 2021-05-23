package com.hetpatel.notes.service;

import java.util.List;

import com.hetpatel.notes.entity.Notes;

public interface NoteService {
	
	public List<Notes> findAll();
	
	public void save(Notes note);
	
	public void deleteById(long id);
	
	public Notes findById(long id);
	
	public Notes update(long id, Notes note);
	
}
