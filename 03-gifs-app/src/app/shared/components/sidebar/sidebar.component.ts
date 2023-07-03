import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor( private gifservice: GifsService ) {}


  get tags( ): string[] {
    return this.gifservice.tagsHistory;
  }

  searchTag( tag: string ) {
    this.gifservice.searchTag( tag )
  }
}
