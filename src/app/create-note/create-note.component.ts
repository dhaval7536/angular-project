import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from './../notes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup;
  constructor(
    public fb: FormBuilder,
    public noteService: NotesService,
    public router: Router
  ) {
    this.noteForm = this.fb.group({
      title: [''],
      description: [''],

    });
  }
  ngOnInit(): void {
  }
  createNote() {
    this.noteService.createNote(this.noteForm.value).subscribe((res) => {
      this.noteForm.reset();
      this.router.navigate(['notes']);
    });
  }
}
