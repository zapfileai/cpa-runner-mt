const montanaCities = [
  "Absarokee", "Alberton", "Anaconda", "Arlee", "Ashland",
  "Babb", "Baker", "Ballantine", "Belfry", "Belgrade",
  "Big Sky", "Big Timber", "Bigfork", "Billings", "Boulder",
  "Bozeman", "Bridger", "Broadus", "Broadview", "Brockway",
  "Browning", "Busby", "Butte", "Cardwell", "Cascade",
  "Chester", "Chinook", "Choteau", "Circle", "Clancy",
  "Clinton", "Clyde Park", "Colstrip", "Columbia Falls", "Columbus",
  "Condon", "Conrad", "Corvallis", "Culbertson", "Cut Bank",
  "Darby", "Deer Lodge", "Denton", "Dillon", "Drummond",
  "East Helena", "Ennis", "Eureka", "Fairfield", "Florence",
  "Forsyth", "Fort Benton", "Fort Shaw", "Frenchtown", "Fromberg",
  "Gallatin Gateway", "Gardiner", "Gildford", "Glasgow", "Glendive",
  "Great Falls", "Greycliff", "Hamilton", "Hardin", "Havre",
  "Helena", "Highwood", "Hobson", "Huntley", "Huson",
  "Hysham", "Ismay", "Jefferson City", "Joliet", "Joplin",
  "Kalispell", "Kila", "Lakeside", "Larslan", "Laurel",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < montanaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(montanaCities[i]);
}

module.exports = { batches };
