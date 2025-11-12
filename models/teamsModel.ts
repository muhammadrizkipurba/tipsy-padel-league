import mongoose, { Schema, Document } from "mongoose";

// Define TypeScript interface for a Todo
export interface ITeam extends Document {
  season: number;
  team_name: string;
  captain_name: string;
  members: {
    name: string;
    level: string; // silver | bronze | women
    is_captain: boolean;
  }[];
};

// Create Mongoose schema
const TeamSchema = new Schema<ITeam>(
  {
    season: { type: Number, required: true },
    team_name: { type: String, required: true },
    captain_name: { type: String, required: true },
    members: [
      { 
        name: { type: String },
        level: { type: String }, // silver, bronze, women
        is_captain: { type: Boolean, default: false }
      }
    ],
  },
  { timestamps: true }
);

const teams = mongoose.models.teams || mongoose.model<ITeam>("teams", TeamSchema);
export default teams;