import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { RequestOptions } from '@angular/http/src/base_request_options';

@Injectable()
export class NotesService {
  notes = [];
  
  constructor(private _http: Http) {}

  createNewNote(note, cb) {
    return this._http
      .post(`/notes`, note, cb) //TODO post
      .subscribe(
        notes => {
          console.log("Successful response from the server");
          // this.notes.push(note.json());
        },
        err => {
          console.log(err);
        }
      );
  }

  getAll(note, cb) {
    return this._http
      .get(`/notes`) //TODO post
      .subscribe(
        notes => {
          console.log("Successful response from the server");
          // this.notes.push(note.json());
        },
        err => {
          console.log(err);
        }
      );
  }
}