import { AlbumBuilder } from "./core/builders/album-builder";
import { StandardAlbumFactory } from "./core/factories/standard-album-factory";
import { AlbumNotifier } from "./core/observer/album-notifier";
import { AlbumObserver } from "./core/observer/album-observer";
import { AlbumService } from "./core/services/album-service";

const albumService = new AlbumService(new StandardAlbumFactory());
const albumNotifier = new AlbumNotifier();

// Observers
const observer1 = new AlbumObserver("Observer 1");
const observer2 = new AlbumObserver("Observer 2");

albumNotifier.addObserver(observer1);
albumNotifier.addObserver(observer2);

albumService.createAlbum("albumTitle");
albumNotifier.notifyObservers(`New album created: ${"albumTitle"}`);

// Utilizando Builder
const albumBuilder = new AlbumBuilder()
  .setTitle("albumTitle")
  .addPhoto("http://example.com/photo1.jpg")
  .addPhoto("http://example.com/photo2.jpg")
  .addVideo("http://example.com/video1.mp4");

const customAlbum = albumBuilder.build();

customAlbum.showContent();
