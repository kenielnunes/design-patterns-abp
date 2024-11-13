import { Photo } from "../entities/photo";
import { Video } from "../entities/video";
import { AlbumContent } from "./album-content";

export class AlbumBuilder {
  private photos: Photo[] = [];
  private videos: Video[] = [];
  private title: string = "";

  setTitle(title: string): AlbumBuilder {
    this.title = title;
    return this;
  }

  addPhoto(url: string): AlbumBuilder {
    this.photos.push(new Photo(url));
    return this;
  }

  addVideo(url: string): AlbumBuilder {
    this.videos.push(new Video(url));
    return this;
  }

  build(): AlbumContent {
    return new AlbumContent(this.title, this.photos, this.videos);
  }
}
