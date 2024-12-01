import { Event } from "../../models/event";
import { Guest } from "../../models/guest";
import { PhotoManager } from "../../services/photo-manager";
import { AlbumFactory } from "../albums/album.factory";
import { QRCodeAdapter } from "./qrcode.adapter";

export class InviteManager {
  async addGuest(event: Event, guestName: string): Promise<Guest> {
    try {
      const qrCode = await QRCodeAdapter.generateQRCode(
        `event:${event.id}|guest:${guestName}`
      );
      const guest = new Guest(guestName, qrCode);

      const album = AlbumFactory.create(guestName);
      event.addAlbum(album);

      // Exemplo de como adicionar fotos
      const photoUrl = "http://example.com/photo1.jpg"; // Este seria o URL real da foto
      PhotoManager.addPhotoToAlbum(album, "Foto 1", photoUrl);

      console.log(`Convidado "${guestName}" adicionado ao evento.`);
      console.log(`QRCode gerado:\n${guest.qrCode}`);
      return guest;
    } catch (error) {
      console.error("Erro ao adicionar convidado:", error);
      throw error;
    }
  }
}
