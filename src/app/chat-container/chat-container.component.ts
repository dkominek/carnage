import {Component, Input, OnInit} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {WebsocketService} from '../websocket.service';
import {PlayerService} from "../player.service";

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.less'],
  providers: [ WebsocketService, ChatService ]
})
export class ChatContainerComponent implements OnInit {

  @Input() active = false;

  protected disabled = false;

  readonly PLACEHOLDER_ENABLED = 'Enter a message...';
  readonly PLACEHOLDER_DISABLED = 'Select a player to participate in chat...';

  protected placeholder = this.PLACEHOLDER_DISABLED;
  protected message = '';
  protected messages: Message[] = [];

  constructor(protected chatService: ChatService, protected playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.activePlayerChanged.subscribe((player) =>  {
      this.disabled = player == null;
      this.message = '';

      if (this.disabled) {
        this.placeholder = this.PLACEHOLDER_DISABLED;
      } else {
          this.placeholder = this.PLACEHOLDER_ENABLED;
      }
    });

    this.chatService.messages.subscribe((m) => {
      this.messages.push(m);
    });
  }

  protected addMessage(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    if (this.message.length !== 0 && this.chatService.addMessage(this.message)) {
      this.message = '';
    }

    return false;
  }
}
