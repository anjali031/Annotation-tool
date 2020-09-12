import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import {AnnotationTool} from './annotation-tool.model';

@Injectable({
  providedIn: 'root'
})
export class AnnotationToolService {
  annotationTool: AnnotationTool;
  tools: AnnotationTool[];

  constructor(private http: HttpClient) { }
  readonly baseURL = 'http://localhost:3000/employees';
  image = '';

  getimage() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos');
  }

  postEmployee(emp: AnnotationTool) {
    const body: AnnotationTool = {
      imagepath: this.image,
      text: emp.text
    };
    return this.http.post(this.baseURL, body);
  }
}
