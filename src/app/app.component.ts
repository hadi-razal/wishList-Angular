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

  items = [
    new WishItem('To Learn Angular'),
    new WishItem('To Learn MySQL', true),
    new WishItem('To Learn SpringBoot', false)
  ];

  title = 'wishlist';
}
