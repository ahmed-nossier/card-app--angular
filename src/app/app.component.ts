import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'snow mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'MAd max',
      content:
        'max like to go to the mountains for jerking off he love to do the nature if you know what i mean',
    },
    {
      title: 'danger biking ',
      imageUrl: 'assets/biking.jpeg',
      username: 'sad soad',
      content:
        "soad has the biggest boobs in her city but that didn't stop her from biking",
    },
    {
      title: 'neat tree ',
      imageUrl: 'assets/tree.jpeg',
      username: 'bold abbas',
      content: 'abbas is very bold thats why he love sitting under trees',
    },
  ];
}
