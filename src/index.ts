import { EventManager } from "./core/events/event-manager";
import { InviteManager } from "./core/invites/invite-manager";
import { PhotoManager } from "./services/photo-manager";

(async () => {
  const event = EventManager.createEvent("Festa de Aniversário");

  const guest = await InviteManager.addGuest(event, "João da Silva");
  const album = event.getAlbums()[0];

  PhotoManager.addPhoto(album, "https://example.com/photo1.jpg", guest.name);

  console.log(`QR Code para o convidado foi salvo no sistema de arquivos.`);
  event.notifyObservers("O evento começou!");
})();
