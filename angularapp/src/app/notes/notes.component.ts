import { Component, OnInit } from '@angular/core';
import { NotesService } from "../notes.service";

@Component({
  selector: "app-notes",
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.css"]
})
export class NotesComponent implements OnInit {
  notes = [];
  note = {};
  constructor(private _notesService: NotesService) {}
  onSubmit(note) {
    this._notesService.createNewNote(note, function(note, err) {
      this.notes = this.notesService.GetAll();
    });
  }
  ngOnInit() {}
}
