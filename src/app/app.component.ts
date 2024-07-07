import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishlistItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('To Learn React', true),
    new WishItem('To Learn MySQL', false),
    new WishItem('To Learn Vue Js', true),
  ];

  newWishText = '';
  ListFilter: string = '0';

  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''
  }

  visibleItems: WishItem[] = this.items;



  fileterChanged(value: any) {
    
    if (value === 0) {
      this.visibleItems == this.items
    } else if (value === 1) {
      this.visibleItems = this.items.filter(item => !item.isComplete)
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete)
    }

    this.ListFilter = value;
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
