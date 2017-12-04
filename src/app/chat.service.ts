import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Rx';
import {WebsocketService} from './websocket.service';
import {PlayerService} from './player.service';

const CHAT_URL = window.location.hostname + (window.location.port ? ':' + window.location.port : '') + '/';

export interface Message {
    author: string;
    message: string;
    timestamp: string;
    old?: boolean;
}

@Injectable()
export class ChatService {
    public messages: Subject<Message>;

    constructor(private wsService: WebsocketService, private playerService: PlayerService) {
        let service = null;
        try {
            service = wsService.connect('wss://' + CHAT_URL);
        } catch (ex) {
            service = wsService.connect('ws://' + CHAT_URL);
        }

        if (service != null) {
            this.messages = service.map((response: MessageEvent): Message => {
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
        } else {
            this.messages = new Subject<Message>();
        }
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
