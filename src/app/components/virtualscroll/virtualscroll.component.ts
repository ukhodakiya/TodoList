import { Component, OnInit } from '@angular/core';
import {ScrollService} from '../../services/scroll.service'

@Component({
  selector: 'app-virtualscroll',
  templateUrl: './virtualscroll.component.html',
  styleUrls: ['./virtualscroll.component.css']
})
export class VirtualscrollComponent implements OnInit {
  public albumdetails = [];
   
  constructor(private scrollService: ScrollService) { }

  ngOnInit() {
    this.scrollService.getData().subscribe((data) => {
         this.albumdetails = Array.from(Object.keys(data), k=>data[k]);
         console.log(this.albumdetails);
      });
  }

}