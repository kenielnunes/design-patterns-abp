import { Album } from "../models/album";
import { Photo } from "../models/photo";

export class PhotoManager {
  static addPhoto(album: Album, photoUrl: string, uploadedBy: string): void {
    const photo = new Photo(photoUrl, uploadedBy);
    album.addPhoto(photo);
    console.log(`Photo added to album "${album.guestName}" by ${uploadedBy}.`);
  }
}
