import { Photo } from "../entities/photo";
import { Video } from "../entities/video";

export class AlbumContent {
  constructor(
    public title: string,
    public photos: Photo[],
    public videos: Video[]
  ) {}

  showContent() {
    console.log(`Album: ${this.title}`);
    console.log(
      "Photos:",
      this.photos.map((photo) => photo.url)
    );
    console.log(
      "Videos:",
      this.videos.map((video) => video.url)
    );
  }
}
