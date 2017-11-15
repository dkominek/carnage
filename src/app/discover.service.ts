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
        '8ywatBcHp2s',
        'XQV2MLHFYFg',
        '-jInzG9Ukrk',
        '6hFb9mslQRc',
        'lzmMnT7DB9I',
        'mAolE6W_l9I',
        'UgJLvtx5PzI',
        'SPxjfQaxZhI',
        'fWY6RbiNgVk',
        'w14beXiD4Cg',
        '4900jOY8cCM'
    ];
    protected videos: DiscoverVideo[] = [];

    constructor(private sanitizer: DomSanitizer, private imagePreloader: ImagePreloaderService, protected http: Http) {
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
