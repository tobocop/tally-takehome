import { v4 as uuidv4 } from 'uuid';

export class UUID {
  static randomUUID(): string {
    return uuidv4();
  }
}
