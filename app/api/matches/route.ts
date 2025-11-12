import connectDB from "@/lib/mongodb";
import LineUps from "@/models/lineUpsModel";
import Matches from "@/models/matchesModel";
import Teams from "@/models/teamsModel";
import { CreateMatchRequestBody } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);
    const season = searchParams.get("season");
    const round = searchParams.get("round");

    if (!season || !round)
      return NextResponse.json({
        status: 400,
        message: "Season & Round number is required!",
      });
    const allMatches = await Matches.find({ season, round }).select("team_1_lineup_id team_2_lineup_id match season round court match_date match_result team_point_earn").populate("team_1_lineup_id", "_id team_id line_ups", LineUps).populate("team_2_lineup_id", "_id team_id line_ups", LineUps).populate("match_result.winner", "_id team_name", Teams);
    return NextResponse.json({ status: 200, data: allMatches });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching todos" });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const requestBody = await req.json();
    const {
      match,
      season,
      round,
      match_date,
      court,
      team_1_lineup_id,
      team_2_lineup_id,
      match_result,
      team_point_earn,
    }: CreateMatchRequestBody = requestBody;

    if (!season || !round)
      return NextResponse.json({
        status: 400,
        message: "Season and round number is required!",
      });

    const matchData = await Matches.create({
      match,
      season,
      round,
      match_date,
      court,
      team_1_lineup_id,
      team_2_lineup_id,
      match_result,
      team_point_earn,
    });

    return NextResponse.json({ status: 200, data: matchData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching todos",
    });
  }
}
