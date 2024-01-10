import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Tutorial } from '../models/tutorial';
const baseUrl: "http://localhost:5000/tareas" = 'http://localhost:5000/tareas'

@Injectable({
  providedIn: 'root'
})
export class TutorialService {
  private baseUrl: string = 'http://localhost:5000/tareas'
  selectedTarea = new Tutorial(0, "", "", "", false)

  constructor(private http: HttpClient) { }

  getJSON(): Observable<any> {
    return this.http.get<any>(this.baseUrl)
  }
}
