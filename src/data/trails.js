// Twelve trails: seven day hikes and five overnights, so the card that draws
// one of them has two call sites. Conditions are five open, four muddy, three
// icy and none closed -- the Closed filter button really is disabled.
//
// `tone` mirrors `condition`. Nothing reads it yet.
export const trails = [
  { id: 1, name: "Cascade Pass", park: "North Cascades",
    miles: 7.4, gain: 1800, kind: "day", condition: "open", tone: "emerald" },
  { id: 2, name: "Rattlesnake Ledge", park: "Mount Si",
    miles: 4.0, gain: 1160, kind: "day", condition: "open", tone: "emerald" },
  { id: 3, name: "Lake Twentytwo", park: "Mount Baker",
    miles: 5.4, gain: 1350, kind: "day", condition: "muddy", tone: "amber" },
  { id: 4, name: "Heather Meadows Interpretive Loop", park: "Mount Baker",
    miles: 1.2, gain: 200, kind: "day", condition: "icy", tone: "sky" },
  { id: 5, name: "Mount Storm King", park: "Olympic",
    miles: 4.1, gain: 2065, kind: "day", condition: "icy", tone: "sky" },
  { id: 6, name: "Wallace Falls", park: "Wallace Falls",
    miles: 5.6, gain: 1300, kind: "day", condition: "muddy", tone: "amber" },
  { id: 7, name: "Dungeness Spit", park: "Dungeness",
    miles: 11.0, gain: 130, kind: "day", condition: "open", tone: "emerald" },
  { id: 8, name: "Enchantments Core", park: "Alpine Lakes",
    miles: 18.0, gain: 4500, kind: "overnight", condition: "icy", tone: "sky" },
  { id: 9, name: "Ozette Triangle", park: "Olympic",
    miles: 9.4, gain: 100, kind: "overnight", condition: "open", tone: "emerald" },
  { id: 10, name: "Spider Gap to Buck Creek Pass", park: "Glacier Peak",
    miles: 35.0, gain: 6900, kind: "overnight", condition: "muddy", tone: "amber" },
  { id: 11, name: "Copper Ridge Loop", park: "North Cascades",
    miles: 34.0, gain: 8600, kind: "overnight", condition: "muddy", tone: "amber" },
  { id: 12, name: "Shi Shi Beach", park: "Olympic",
    miles: 8.0, gain: 200, kind: "overnight", condition: "open", tone: "emerald" },
];
