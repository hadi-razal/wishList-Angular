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
    new WishItem('To Learn MySQL', true),
    new WishItem('To Learn MySQL', true),
    new WishItem('To Learn SpringBoot', false),
    new WishItem('To Learn SpringBoot', false),
    new WishItem('To Learn SpringBoot', false)
  ];

  newWishText = '';

  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText));
    this.newWishText = ''
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
