import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {
  saveText: boolean = true;

  done = []

  story = [
    { src: '../../../assets/img/Screenshot_1.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 1 },
    { src: '../../../assets/img/Screenshot_2.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 2 },
    { src: '../../../assets/img/Screenshot_3.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 3 },
    { src: '../../../assets/img/Screenshot_4.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 4 },
    { src: '../../../assets/img/Screenshot_5.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 5 },
    { src: '../../../assets/img/Screenshot_6.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 6 },
    { src: '../../../assets/img/Screenshot_7.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 7 },
    { src: '../../../assets/img/Screenshot_8.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 8 }
  ];

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
                        this.story = [
                          { src: '../../../assets/img/Screenshot_1.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 1 },
                          { src: '../../../assets/img/Screenshot_2.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 2 },
                          { src: '../../../assets/img/Screenshot_3.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 3 },
                          { src: '../../../assets/img/Screenshot_4.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 4 },
                          { src: '../../../assets/img/Screenshot_5.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 5 },
                          { src: '../../../assets/img/Screenshot_6.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 6 },
                          { src: '../../../assets/img/Screenshot_7.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 7 },
                          { src: '../../../assets/img/Screenshot_8.png', text: 'A short walk away, Gemma brushed past a prickly bush and followed a small break in the twisted liana vines. She came to a wall of leaves and grew excited at the sound of movement ahead. She often felt like she could sense when adventure was near. In fact, she felt it almost every single day, and for the past year, she had been wrong roughly every single time.', number: 8 }
                        ]
    }
  }

  save() {
    this.saveText = true;
  }

  reset(story) {
    story.text = '';
  }

  edit() {
    this.saveText = false;
  }

  delete(id) {
    this.done.splice(id, 1);
  }
}
