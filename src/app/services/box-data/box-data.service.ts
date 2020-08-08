import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { BoxInfoModel } from '../../models';

@Injectable({
  providedIn: 'root'
})
export class BoxDataService {
  movementAllowed: boolean = true;
  boxesData: BoxInfoModel[] = [];
  maxZAvailable: number = 1;

  private boxesDataSubject = new BehaviorSubject<BoxInfoModel[]>(this.boxesData);
  boxesData$ = this.boxesDataSubject.asObservable();

  private movementAllowedSubject = new BehaviorSubject<boolean>(this.movementAllowed);
  movementAllowed$ = this.movementAllowedSubject.asObservable();
  constructor() { }

  updateBoxesData() {
    this.boxesDataSubject.next(this.boxesData);
  }

  updateBoxMovement() {
    this.movementAllowed = !this.movementAllowed;
    this.movementAllowedSubject.next(this.movementAllowed);
  }

  addNewBox() {
    if (this.boxesData.length < 50) {
      const timeStamp = new Date().getTime();
      const newBox: BoxInfoModel = {
        uid: timeStamp,
        zIndex: this.maxZAvailable
      }
      this.maxZAvailable++;
      this.boxesData.push(newBox);
      this.updateBoxesData();
      return true;
    } else {
      return false;
    }
  }

  removeBox(uid: number) {
    if (this.boxesData.length !== 0) {
      this.boxesData = this.boxesData.filter(box => box.uid !== uid)
      this.updateBoxesData();
      return true;
    } else {
      return false;
    }
  }

  removeAllBoxes() {
    this.boxesData.length = 0;
    this.updateBoxesData();
  }
}
