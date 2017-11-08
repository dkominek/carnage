import {Component, Input, OnInit} from '@angular/core';
import {Character} from '../character.service';

@Component({
  selector: 'app-character-avatar',
  templateUrl: './character-avatar.component.html',
  styleUrls: ['./character-avatar.component.less']
})
export class CharacterAvatarComponent implements OnInit {

  @Input() alwaysShowName = false;
  @Input() noHover = false;
  @Input() character: Character = null;

  constructor() { }

  ngOnInit() {
  }

}
