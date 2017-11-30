import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs/Rx';
import { WebsocketService } from './websocket.service';
import {PlayerService} from './player.service';

const CHAT_URL = 'ws://localhost:8080/';

export interface Message {
    author: string;
    message: string;
    timestamp: string;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService, protected playerService: PlayerService) {
        this.messages = <Subject<Message>>wsService
            .connect(CHAT_URL)
            .map((response: MessageEvent): Message => {
                const data = JSON.parse(response.data);
                const now = (new Date());
                const pad = '00';

                let hours = now.getHours().toString();
                hours = pad.substring(0, pad.length - hours.length) + hours;

                let minutes = now.getMinutes().toString();
                minutes = pad.substring(0, pad.length - minutes.length) + minutes;

                return {
                    author: data.author,
                    message: data.message,
                    timestamp: hours + ':' + minutes
                };
            });
    }

    addMessage(message: string): boolean {
        const activePlayer = this.playerService.getActivePlayer();
        if (activePlayer != null) {
            this.messages.next({
                author: activePlayer.name,
                message: message,
                timestamp: null
            });
            return true;
        }
        return false;
    }
}
