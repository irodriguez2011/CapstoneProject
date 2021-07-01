package com.example.springJPA.entity;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;





@Entity
@Table(name="notes_table",schema="notesapp")


public class Note {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int Id;
	private String title;
	private String body;
	private String category;
	
	@Column(name="created_at", nullable=false, updatable=false)
	@CreationTimestamp
	private Date created_at;
	
	@Column(name="updated_at")
	@UpdateTimestamp
	private Date updated_at;
	
	
	

	public Note() {
		
	}
	
	
	public Note(int id, String title, String body, String category, Date created_at, Date updated_at) {
		super();
		Id = id;
		this.title = title;
		this.body = body;
		this.category = category;
		this.created_at = created_at;
		this.updated_at = updated_at;
	}
	
	public int getId() {
		return Id;
	}
	
	public void setId(int id) {
		Id = id;
	}
	
	public String getTitle() {
		return title;
	}
	
	public void setTitle(String title) {
		this.title = title;
	}
	

	public String getBody() {
		return body;
	}
	
	public void setBody(String body) {
		this.body = body;
	}
	
	public String getCategory() {
		return category;
	}
	
	public void setCategory(String category) {
		this.category = category;
	}

	public Date getCreated_at() {
		return created_at;
	}

	public void setCreated_at(Date created_at) {
		this.created_at = created_at;
	}

	public Date getUpdated_at() {
		return updated_at;
	}

	public void setUpdated_at(Date updated_at) {
		this.updated_at = updated_at;
	}
	
	
}
