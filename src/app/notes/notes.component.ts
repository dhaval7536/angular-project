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
    public router: Router
  ) {
  }
  ngOnInit() {
    this.getList()
  }

  getList() {
    this.noteService.getNote().subscribe((res) => {
      this.notes = JSON.parse(JSON.stringify(res))
      console.log(this.notes);

    });
  }

  editNote(id: number) {


  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe((res) => {
      this.getList()
    })
  }

}
