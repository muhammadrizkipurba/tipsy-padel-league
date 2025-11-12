import mongoose, { Schema, Document, Types } from "mongoose";

const objectId = Schema.Types.ObjectId;

export interface ILineups extends Document {
  match_date: string; // DD-MM-YYYY
  round: number;
  court: string;
  team_1_id: Types.ObjectId;
  team_2_id: Types.ObjectId;
  season: number;
  match_result: {
    team_1_score: number;
    team_2_score: number;
    winner: Types.ObjectId;
  };
  team_point_earn: number;
}

// Create Mongoose schema
const LineUpSchema = new Schema<ILineups>(
  {
    match_date: { type: String, require: true },
    round: { type: Number, require: true },
    court: { type: String, require: true },
    team_1_id: { type: objectId, ref: "teams" },
    team_2_id: { type: objectId, ref: "teams" },
    season: { type: Number, default: 1, require: true },
    match_result: {
      team_1_score: { type: Number, require: true },
      team_2_score: { type: Number, require: true },
      winner: { type: objectId, ref: "teams" },
    },
    team_point_earn: { type: Number, default: 1, require: true },
  },
  { timestamps: true }
);
// Prevent model recompilation in development
export default mongoose.models.Matches || mongoose.model<ILineups>("Matches", LineUpSchema);
