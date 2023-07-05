import { Component, Input } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent {

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hasLoaded: boolean = false;

  ngOnInit(): void {
      throw new Error ('Method not implement');
  }

  onLoad() {
    this.hasLoaded = true;
    // console.log('Image loaded');
  }
}
