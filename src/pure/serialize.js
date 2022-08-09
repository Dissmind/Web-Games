export class Serialize {
  static copy(objectToClone) {
    return JSON.parse(JSON.stringify(objectToClone))
  }
}