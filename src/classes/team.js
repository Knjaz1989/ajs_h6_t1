export default class Team {
  constructor() {
      this.members = new Set();
  }
  
  add (character) {
    if (this.members.has(character)) {
      throw new Error("This person already has been added")
    }
    this.members.add(character);
  }

  addAll (...members) {
    members.forEach(member => {
      if (this.members.has(member)) {
        return
      }
      this.members.add(member)
    })
  }

  toArray () {
    const array = [];
    this.members.forEach(v => array.push(v));
    return array;
  }
}