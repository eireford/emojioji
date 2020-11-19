import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appDropZone]',
})
export class DropZoneDirective {
  @Output() dropped = new EventEmitter<DragEvent | boolean>();
  @Output() hovered = new EventEmitter<DragEvent | boolean>();

  constructor() {}

  @HostListener('drop', ['$event'])
  onDrop($event: Event) {
    $event.preventDefault();
    if ($event instanceof DragEvent) this.dropped.emit($event as DragEvent);
    this.hovered.emit(false);
  }

  @HostListener('dragover', ['$event'])
  onDragOver($event: Event) {
    $event.preventDefault();
    this.hovered.emit(true);
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave($event: Event) {
    $event.preventDefault();
    this.hovered.emit(false);
  }
}
