import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {ChatService, Message} from '../chat.service';
import {WebsocketService} from '../websocket.service';
import {PlayerService} from '../player.service';

@Component({
  selector: 'app-chat-container',
  templateUrl: './chat-container.component.html',
  styleUrls: ['./chat-container.component.less'],
  providers: [ WebsocketService, ChatService ]
})
export class ChatContainerComponent implements OnInit {

  @ViewChild('messagesElement') messagesElement: ElementRef;
  @Input() active = false;

  disabled = false;

  readonly PLACEHOLDER_ENABLED = 'Enter a message...';
  readonly PLACEHOLDER_DISABLED = 'Select a player to participate in chat...';

  placeholder = this.PLACEHOLDER_DISABLED;
  message = '';
  messages: Message[] = [];

  constructor(public chatService: ChatService, public playerService: PlayerService) { }

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

      setTimeout(() => {
          if (this.messagesElement != null) {
              this.messagesElement.nativeElement.scrollTop = this.messagesElement.nativeElement.scrollHeight;
          }
      });
    });
  }

  addMessage(evt = null) {
    if (evt) {
      evt.preventDefault();
    }

    if (this.message.length !== 0 && this.chatService.addMessage(this.message)) {
      this.message = '';
    }

    return false;
  }
}
