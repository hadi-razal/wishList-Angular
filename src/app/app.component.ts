import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishlistItem';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


const filters = [
  (item: WishItem) => item,
  (item: WishItem) => item.isComplete,
  (item: WishItem) => !item.isComplete,
]

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

  get visibleItems(): WishItem[] {
    return this.items.filter(filters[Number(this.ListFilter)]);  }




  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
