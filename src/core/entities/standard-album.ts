import { Album } from "./album";

export class StandardAlbum extends Album {
  getDetails() {
    console.log(`Album: ${this.title} (Standard) - Up to 50 photos.`);
  }
}
