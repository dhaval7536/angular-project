import { Component, OnInit } from '@angular/core';
import { NotesService } from './../notes.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: any[] = [];
  constructor(
    public noteService: NotesService,
    public router: Router,
  ) {
  }
  ngOnInit() {
    this.getList()
  }

  getList() {
    this.noteService.getNote().subscribe((res) => {
      this.notes = JSON.parse(JSON.stringify(res))
      localStorage.setItem('notes', JSON.stringify(res));
    });
  }

  editNote(note: any) {
    this.router.navigate(['edit-note', note._id]);
  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe((res) => {
      this.getList()
    })
  }

}
