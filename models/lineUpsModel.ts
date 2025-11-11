import mongoose, { Schema, Document, Types } from "mongoose";

const objectId = Schema.Types.ObjectId;

// Define TypeScript interface for a Todo
export interface ILineups extends Document {
  team_id: Types.ObjectId;
  season: number;
  line_ups: {
    round: number;
    player_1_name: string;
    player_1_level: string; // silver | bronze | women
    player_2_name: string;
    player_2_level: string; // silver | bronze | women
  }[];
};

// Create Mongoose schema
const LineUpSchema = new Schema<ILineups>(
  {
    team_id: { type: objectId, ref: "teams" },
    season: { type: Number, default: 1, require: true },
    line_ups: [
      { 
        round: { type: Number, require: true },
        player_1_name: { type: String, require: true },
        player_1_level: { type: String, require: true },
        player_2_name: { type: String, require: true },
        player_2_level: { type: String, require: true },
      }
    ]
  },
  { timestamps: true }
);
// Prevent model recompilation in development
export default mongoose.models.LineUps || mongoose.model<ILineups>("LineUps", LineUpSchema);