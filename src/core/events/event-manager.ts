import { Event } from "../../models/event";

export class EventManager {
  static createEvent(eventName: string): Event {
    const eventId = Math.random().toString(36).substr(2, 9);
    console.log(`Event "${eventName}" created with ID: ${eventId}`);
    return new Event(eventId, eventName);
  }
}
