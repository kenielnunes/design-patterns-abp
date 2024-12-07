import { GuestBuilder } from "../../builders/guest.builder";
import { Event } from "../../models/event";
import { Guest } from "../../models/guest";
import { AlbumFactory } from "../albums/album.factory";

export class InviteManager {
  static async addGuest(event: Event, guestName: string): Promise<Guest> {
    const guestBuilder = new GuestBuilder();

    guestBuilder.setName(guestName).generateQRCode();

    const guest = await guestBuilder.build();

    const album = AlbumFactory.createAlbum(guestName);

    event.addAlbum(album);
    event.addObserver(guest);

    console.log(`Guest "${guestName}" added to the event.`);
    return guest;
  }
}
