import { Component, OnInit } from '@angular/core';
import { BoxDataService } from '../../services/box-data/box-data.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  movementStatus: string = "Stop";

  constructor(private boxDataService: BoxDataService) {
  }

  ngOnInit() {
  }

  addNewBox() {
    this.boxDataService.addNewBox();
  }

  toggleMovement() {
    if (this.movementStatus == "Stop") {
      this.movementStatus = "Start";
    } else {
      this.movementStatus = "Stop";
    }
    this.boxDataService.updateBoxMovement();
  }

  removeAll() {
    const confirmDelete = confirm("Are you sure to delete all boxes?");
    if (confirmDelete) {
      this.boxDataService.removeAllBoxes();
    }
  }

}
