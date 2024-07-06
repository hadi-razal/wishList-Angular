import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishlistItem';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  items: WishItem[] = [
    new WishItem('To Learn Angular'),
    new WishItem('To Learn MySQL', true),
    new WishItem('To Learn SpringBoot', false)
  ];


  newWishItem = '';


  title = 'wishlist';




  addNewWish(text: string) {
    new WishItem(text, false)
  }


  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item)
    alert('Toggle Item');
  }
}
