package com.hetpatel.notes.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.hetpatel.notes.entity.Notes;

public interface NotesRepository extends JpaRepository<Notes, Long> {

}
