import mongoose from "mongoose";
import GalaxySchema from "../models/Galaxy";
import StarSchema from "../models/Star";
import MoonSchema from "../models/Moon";
import SpecieSchema from "../models/Specie";
import PlanetSchema from "../models/Planet";


class DbContext {
  Values = mongoose.model("Value", ValueSchema);
  Galaxies = mongoose.model("Galaxy", GalaxySchema);
  Stars = mongoose.model("Star", StarSchema);
  Moons = mongoose.model("Moon", MoonSchema);
  Species = mongoose.model("Specie", SpecieSchema);
  Planets = mongoose.model("Planet", PlanetSchema);
}

export const dbContext = new DbContext();
