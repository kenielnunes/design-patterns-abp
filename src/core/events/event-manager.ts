import { Event } from "../../models/event";

export class EventManager {
  private events: Map<string, Event> = new Map();

  addEvent(event: Event) {
    this.events.set(event.id, event);
  }

  getEvent(id: string): Event | undefined {
    return this.events.get(id);
  }
}
