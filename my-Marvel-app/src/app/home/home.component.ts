import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvengersService } from '../avengers/avengers/shared/avengers.service';
import { ComicsApiService } from '../comics/comics/shared/comics-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   
  constructor(private comicsSvc: ComicsApiService) { }
  wanda!: Observable<any>;

  ngOnInit() {
    this.getComics();
  }

  getComics() {
    this.wanda = this.comicsSvc.getAllComics();
  }
}
