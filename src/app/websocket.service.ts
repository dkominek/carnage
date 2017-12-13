import { Injectable } from '@angular/core';
import * as Rx from 'rxjs/Rx';

@Injectable()
export class WebsocketService {
    constructor() { }

    private subject: Rx.Subject<MessageEvent>;

    public connect(url): Rx.Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url);
            console.log('Successfully connected: ' + url);
        }
        return this.subject;
    }

    private create(url): Rx.Subject<MessageEvent> {
        let ws = new WebSocket(url);

        const bindWebsocket = (obs) => {
            ws = new WebSocket(url);

            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = () => {
                ws = new WebSocket(url);
                bindWebsocket(obs);
            };
        };

        const observable = Rx.Observable.create(
            (obs: Rx.Observer<MessageEvent>) => {
                bindWebsocket(obs);
                return () => {
                    ws.close.bind(ws);
                };
            });
        const observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
            }
        };
        return Rx.Subject.create(observer, observable);
    }
}
