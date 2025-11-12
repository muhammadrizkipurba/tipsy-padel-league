import mongoose, { Schema, Document, Types } from "mongoose";

const objectId = Schema.Types.ObjectId;

export interface IMatches extends Document {
  match: number;
  match_date: string; // DD-MM-YYYY
  season: number;
  round: number;
  court: string;
  team_1_lineup_id: Types.ObjectId;
  team_2_lineup_id: Types.ObjectId;
  match_result: {
    team_1_score: number;
    team_2_score: number;
    winner: Types.ObjectId | null;
  };
  team_point_earn: number;
}

// Create Mongoose schema
const LineUpSchema = new Schema<IMatches>(
  {
    match: { type: Number, require: true },
    match_date: { type: String, require: true },
    round: { type: Number, require: true },
    court: { type: String, require: true },
    team_1_lineup_id: { type: objectId, ref: "lineups" },
    team_2_lineup_id: { type: objectId, ref: "lineups" },
    season: { type: Number, default: 1, require: true },
    match_result: {
      team_1_score: { type: Number, require: true },
      team_2_score: { type: Number, require: true },
      winner: { type: objectId, ref: "teams", default: null },
    },
    team_point_earn: { type: Number, default: 1, require: true },
  },
  { timestamps: true }
);
// Prevent model recompilation in development
const Matches =  mongoose.models.matches || mongoose.model<IMatches>("matches", LineUpSchema);
export default Matches;
