import { Photo } from "./photo";

export class Album {
  private photos: Photo[] = [];

  constructor(public guestName: string) {}

  addPhoto(photo: Photo): void {
    this.photos.push(photo);
  }

  getPhotos(): Photo[] {
    return this.photos;
  }
}
