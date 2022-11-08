import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class NotesService {
  endpoint: string = 'https://note-api-by-dhaval.herokuapp.com/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, public router: Router) { }
  // create note
  createNote(note: Note): Observable<any> {
    let api = `${this.endpoint}note`;
    return this.http.post(api, note).pipe(catchError(this.handleError));
  }
  // get note
  getNote(): Observable<any> {
    let api = `${this.endpoint}note`;
    return this.http.get(api).pipe(catchError(this.handleError));
  }
  // edit note
  editNote(note: Note): Observable<any> {
    let api = `${this.endpoint}note`;
    return this.http.post(api, note).pipe(catchError(this.handleError));
  }

  // delete note
  deleteNote(id: number): Observable<any> {
    let api = `${this.endpoint}note/${id}`;
    return this.http.delete(api).pipe(catchError(this.handleError));
  }

  getToken() {
    return localStorage.getItem('access_token');
  }
  get isLoggedIn(): boolean {
    let authToken = localStorage.getItem('access_token');
    return authToken !== null ? true : false;
  }
  doLogout() {
    let removeToken = localStorage.removeItem('access_token');
    if (removeToken == null) {
      this.router.navigate(['login']);
    }
  }
  // Error
  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }
}
