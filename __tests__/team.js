import Character from "../src/classes/character.js";
import Team from "../src/classes/team.js";


// test.each([
//   ["8 (927) 000-00-00", "+79270000000"],
//   ["+7 960 000 00 00", "+79600000000"],
//   ["+86 000 000 0000", "+860000000000"],
// ])(
//   "Test change phone %s", (phone, expected) => {
//     expect(changePhone(phone)).toBe(expected);
//   }
// );

const team = new Team;
const member1 = new Character("Ivan");
const member2 = new Character("Vasya");
const member3 = new Character("Petya");

test("Check add member", () => {
  team.add(member1);
  expect(new Set([member1])).toEqual(team.members);
});

test("Check add the same member", () => {
  expect(() => {
    team.add(member1);
  }).toThrow(Error);
});

test("Check addAll member", () => {
  team.addAll(member2, member3);
  expect(new Set([member1, member2, member3])).toEqual(team.members);
});

test("Check addAll the same member", () => {
  team.addAll(member2);
  expect(new Set([member1, member2, member3])).toEqual(team.members);
});

test("Check toArra member", () => {
  const allMembers = [member1, member2, member3].reduce((target, value) => {
    target.push(value);
    return target;
}, [])
console.log(team.members);
console.log(allMembers);
  expect(allMembers).toEqual(team.toArray());
});