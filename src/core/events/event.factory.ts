import { Event } from "../../models/event";

export class EventFactory {
  static create(name: string, date: Date, description: string): Event {
    const id = `event-${Date.now()}`;
    return new Event(id, name, date, description);
  }
}
