import { Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {HomeComponent} from './home/home.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Housing';
}
