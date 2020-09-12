import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  styleUrls: ['./cards-list.component.css']
})
export class CardsListComponent implements OnInit {

  constructor() { }
  public items = [
    {
      id: 1,
      name: 'Shweta',
      lname: 'Yadav'
    },
    {
      id: 2,
      name: 'Supriya',
      lname: 'Yadav'
    },
    {
      id: 3,
      name: 'Abhishek',
      lname: 'Yadav'
    },
    {
      id: 4,
      name: 'Ritesh',
      lname: 'Yadav'
    }
  ]

  ngOnInit(): void {
  }

}
