// src/services/photoManager.ts
import { Album } from "../models/album";
import { Photo } from "../models/photo";

export class PhotoManager {
  static addPhotoToAlbum(
    album: Album,
    photoName: string,
    photoUrl: string
  ): void {
    const photo = new Photo(photoName, photoUrl);
    album.addPhoto(photo);
    console.log(
      `Foto "${photoName}" adicionada ao álbum de ${album.guestName}`
    );
  }
}
