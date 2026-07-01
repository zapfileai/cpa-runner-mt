const montanaCities = [
  "Lewistown", "Libby", "Livingston", "Lolo", "Malta",
  "Manhattan", "Marion", "Mcallister", "Medicine Lake", "Melrose",
  "Miles City", "Missoula", "Neihart", "Oilmont", "Ovando",
  "Park City", "Philipsburg", "Pinesdale", "Plentywood", "Polson",
  "Power", "Pray", "Proctor", "Rapelje", "Raynesford",
  "Red Lodge", "Richey", "Roberts", "Rollins", "Ronan",
  "Roundup", "Roy", "Saint Ignatius", "Saint Regis", "Scobey",
  "Seeley Lake", "Shelby", "Shepherd", "Sheridan", "Sidney",
  "Silver Star", "Somers", "Stanford", "Stevensville", "Sun River",
  "Superior", "Thompson Falls", "Three Forks", "Townsend", "Trego",
  "Trout Creek", "Twin Bridges", "Ulm", "Vaughn", "Victor",
  "West Yellowstone", "White Sulphur Springs", "Whitefish", "Willow Creek", "Wilsall",
  "Winston", "Wolf Point", "Worden",
];

const BATCH_SIZE = 5;

const batches = {};
for (let i = 0; i < montanaCities.length; i++) {
  const batchNum = Math.floor(i / BATCH_SIZE) + 1;
  if (!batches[batchNum]) batches[batchNum] = [];
  batches[batchNum].push(montanaCities[i]);
}

module.exports = { batches };
