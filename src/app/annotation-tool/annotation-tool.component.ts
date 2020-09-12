import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import { NgForm } from '@angular/forms';
import {AnnotationToolService} from '../shared/annotation-tool.service';
import {AnnotationTool } from '../shared/annotation-tool.model';
@Component({
  selector: 'app-annotation-tool',
  templateUrl: './annotation-tool.component.html',
  styleUrls: ['./annotation-tool.component.css'],
  providers: [AnnotationToolService]
})
export class AnnotationToolComponent implements OnInit {
  data: any = [];
  i = 0;
  id = '';
  constructor(private cookie: CookieService, public annotationService: AnnotationToolService) { }

  ngOnInit(): void {
    this.resetForm();
    this.coocie();
    this.get();
  }

  // sets cookies
  coocie() {
    this.cookie.set('user', 'ABC');
  }
  get() {
    this.annotationService.getimage().subscribe((data: any) => {
      this.data = data[this.i];
    });
  }

  // form functions
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
    }
    this.annotationService.annotationTool = {
      imagepath: '',
      text: ''
    };
  }

  // form submit function
  onSubmit(form: NgForm) {
      this.i += 1;
      this.get();
      // tslint:disable-next-line: no-unused-expression
      this.annotationService.image = `${this.data.url}` ;
      this.annotationService.postEmployee(form.value).subscribe((res) => (
        this.resetForm(form)
      ));
  }

  skipForm() {
    this.resetForm();
    this.i += 1;
    this.get();
    // tslint:disable-next-line: no-unused-expression
    (document.getElementById('imagepath')as HTMLInputElement).value === `${this.data.url}` ;
  }

}
