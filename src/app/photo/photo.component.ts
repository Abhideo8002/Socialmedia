import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor() { }
  public video =[
    {vName:'React', Photo:'assets/Accounts (1).png',Like:0,Dislike:0},
    {vName:'Login System', Photo:'assets/Library.png',Like:0,Dislike:0},
    {vName:'Purchase', Photo:'assets/Purchase.png',Like:0,Dislike:0},
    {vName:'Programe', Photo:'assets/Programme Office.png',Like:0,Dislike:0}
  ]

  ngOnInit(): void {
  }
  public LikeCounter(video:any){
    video.Like++;
  }
  public DislikeCounter(video:any){
    video.Dislike++;
  }

}
