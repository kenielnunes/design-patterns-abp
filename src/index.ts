import { EventManager } from "./core/events/event-manager";
import { EventFactory } from "./core/events/event.factory";
import { InviteManager } from "./core/invites/invite-manager";

async function main() {
  const eventManager = new EventManager();
  const inviteManager = new InviteManager();

  // Criar evento
  const wedding = EventFactory.create(
    "Casamento do João e Maria",
    new Date("2024-12-15"),
    "Uma celebração especial!"
  );

  eventManager.addEvent(wedding);

  // Adicionar convidados ao evento
  await inviteManager.addGuest(wedding, "Carlos");
  await inviteManager.addGuest(wedding, "Ana");

  // Exibir álbuns do evento
  console.log("\nÁlbuns do evento:");
  wedding.albums.forEach((album, guest) => {
    console.log(`- Álbum de ${guest}: ${album.getPhotos().length} fotos.`);
  });
}

main().catch((err) => console.error(err));
