import { Component, OnInit } from '@angular/core';
import { BoxDataService } from '../../services/box-data/box-data.service';
import { Observable } from 'rxjs';
import { BoxInfoModel } from 'src/app/models';

@Component({
  selector: 'app-play-ground',
  templateUrl: './play-ground.component.html',
  styleUrls: ['./play-ground.component.css']
})
export class PlayGroundComponent implements OnInit {

  boxesData$: Observable<BoxInfoModel[]> = this.boxDataService.boxesData$;

  constructor(private boxDataService: BoxDataService) { }

  ngOnInit() {
  }
}
