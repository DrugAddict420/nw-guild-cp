export type EventId = string;

export interface Event {
  id: EventId;
}

export type EventType<T extends Event> = new (...params: never[]) => T;
