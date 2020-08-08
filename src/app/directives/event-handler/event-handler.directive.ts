import { Directive, Renderer2, ElementRef, OnInit, HostListener, HostBinding, Input, OnDestroy, } from '@angular/core';
import { BoxInfoModel } from 'src/app/models';
import { BoxDataService } from '../../services/box-data/box-data.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appEventHandler]'
})
export class EventHandlerDirective implements OnInit, OnDestroy {
  @Input() boxInfo: BoxInfoModel;
  @HostBinding('class.selected-box') private isSelected: boolean;
  @HostBinding('attr.tabindex') tabindex = '0';

  private subscriptions: Subscription;
  private movementAllowedStatus: boolean = true;

  constructor(private renderer2: Renderer2,
    private elementRef: ElementRef,
    private boxDataService: BoxDataService) {
    this.subscriptions = this.boxDataService.movementAllowed$.subscribe(status => {
      this.movementAllowedStatus = status;
    })
  }

  ngOnInit() {
    this.renderer2.setStyle(this.elementRef.nativeElement, 'left', '0px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'top', '0px');
    this.renderer2.setStyle(this.elementRef.nativeElement, 'z-index', this.boxInfo.zIndex);
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    if (this.isSelected && this.movementAllowedStatus) {
      switch (event.code) {
        case 'KeyA':
        case 'ArrowLeft':
          this.moveLeft();
          break;
        case 'KeyD':
        case 'ArrowRight':
          this.moveRight();
          break;
        case 'KeyS':
        case 'ArrowDown':
          this.moveDown();
          break;
        case 'KeyW':
        case 'ArrowUp':
          this.moveUp();
          break;
        case 'Delete':
          this.deleteBox();
          break;
      }
    }
  }

  @HostListener('click') onClick() {
    this.isSelected = !this.isSelected;
  }

  @HostListener('blur', ['$event.target']) onBlur() {
    this.isSelected = false;
  }

  moveRight() {
    let leftVal = parseInt(this.elementRef.nativeElement.style.left);
    leftVal += 5;

    if (leftVal > 1000) {
      leftVal = 0;
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'left', `${leftVal}px`);
  }

  moveLeft() {
    let leftVal = parseInt(this.elementRef.nativeElement.style.left);
    leftVal -= 5;

    if (leftVal < 0) {
      leftVal = 1000;
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'left', `${leftVal}px`);
  }

  moveUp() {
    let topVal = parseInt(this.elementRef.nativeElement.style.top);
    topVal -= 5;

    if (topVal < 0) {
      topVal = 400;
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'top', `${topVal}px`);
  }

  moveDown() {
    let topVal = parseInt(this.elementRef.nativeElement.style.top);
    topVal += 5;

    if (topVal > 400) {
      topVal = 0;
    }
    this.renderer2.setStyle(this.elementRef.nativeElement, 'top', `${topVal}px`);
  }

  deleteBox() {
    const confirmDelete = confirm(`Are you sure to delete "B:${this.boxInfo.zIndex}"?`);
    if (confirmDelete) {
      this.boxDataService.removeBox(this.boxInfo.uid);
    }
  }
}
