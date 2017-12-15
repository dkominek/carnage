import {Injectable} from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {ImagePreloaderService} from './image-preloader.service';
import {Http, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class DiscoverService {

    private readonly googleApiKey = 'AIzaSyCeTDxR1qTz2RSk8oHOIt48I52O_Q0FTiA';
    public readonly videoIds = [
        'E6Vh1gUO3k0',
        '1CQSRsfqhR8',
        'arNnodE-i1o',
        '4t1t9Cbx9BY',
        'CqVmUNWSsg0',
        'DoPhvxavQho',
        '7y8AmQNI7Dg',
        'cnHvLcUC9mM',
        'Oty9AF0E754'
    ];
    videos: DiscoverVideo[] = [];

    constructor(private sanitizer: DomSanitizer, private imagePreloader: ImagePreloaderService, private http: Http) {
        const params: URLSearchParams = new URLSearchParams();
        params.set('id', this.videoIds.join());
        params.set('part', 'snippet,contentDetails,player');
        params.set('key', this.googleApiKey);

        this.http.get('https://www.googleapis.com/youtube/v3/videos?' + params.toString()).map(res => res.json()).take(1)
            .subscribe((response) => {
                this.buildVideos(response);
            });
    }

    private buildVideos(googleResponse) {
        const videos = googleResponse.items;
        videos.forEach((video) => {
            const discoverVideo = {
                title: video.snippet.title,
                description: video.snippet.description,
                videoUrl: this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + video.id + '?autoplay=1'),
                imageUrl: this.sanitizer.bypassSecurityTrustResourceUrl(video.snippet.thumbnails.medium.url)
            };

            this.imagePreloader.preload(video.snippet.thumbnails.medium.url);
            this.videos.push(discoverVideo);
        });
    }
}

export interface DiscoverVideo {
    title: string;
    description: string;
    videoUrl: SafeResourceUrl;
    imageUrl: SafeResourceUrl;
}
