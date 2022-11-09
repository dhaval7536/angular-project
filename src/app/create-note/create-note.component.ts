import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NotesService } from './../notes.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.css']
})
export class CreateNoteComponent implements OnInit {
  noteForm: FormGroup;
  id!: number;
  notes: any = localStorage.getItem('notes')
  constructor(
    public fb: FormBuilder,
    public noteService: NotesService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.noteForm = this.fb.group({
      title: [''],
      description: [''],
    });
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      let note = JSON.parse(this.notes)
      for (let index = 0; index < note.length; index++) {
        const element = note[index];
        if (this.id == element._id) {
          this.noteForm.setValue({ title: element.title, description: element.description })
        }

      }


    });
  }
  createNote() {
    if (this.id == undefined) {
      this.noteService.createNote(this.noteForm.value).subscribe((res) => {
        this.noteForm.reset();
        this.router.navigate(['notes']);
      });
    } else if (this.id) {
      this.noteService.editNote(this.id, this.noteForm.value).subscribe((res) => {
        this.noteForm.reset();
        this.router.navigate(['notes']);
      });
    }

  }
}
