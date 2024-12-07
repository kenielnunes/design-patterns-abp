import { Event } from "../../models/event";

export class EventFactory {
  static create(name: string): Event {
    const id = `event-${Date.now()}`;
    return new Event(id, name);
  }
}
