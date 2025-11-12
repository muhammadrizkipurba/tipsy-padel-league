import connectDB from "@/lib/mongodb";
import LineUps from "@/models/lineUpsModel";
import Teams from "@/models/teamsModel";
import { CreateTeamLineupBody } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";

// GET TEAMS LINEUP
export async function GET(req: NextRequest) {
  await connectDB();

  try {
    const { searchParams } = new URL(req.url);
    const team_id = searchParams.get("team_id");
    const season = searchParams.get("season");
    const round = searchParams.get("round");

    let round_number = 1;

    if (!season)
      return NextResponse.json({
        status: 400,
        message: "Season number is required!",
      });
    
    if(round) round_number = Number(round);

    if (team_id) {
      const singleTeamData = await LineUps.findOne({ team_id, season, round: round_number }).select("_id team_id season round round_match_date line_ups").populate("team_id", "_id team_name", Teams);
      return NextResponse.json({ status: 200, data: singleTeamData });
    } else {
      const allTeamData = await LineUps.find({ season, round: round_number }).select("_id team_id season round round_match_date line_ups").populate("team_id", "_id team_name", Teams);
      return NextResponse.json({ status: 200, data: allTeamData });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ status: 500, message: "Error fetching todos" });
  }
}

export async function POST(req: NextRequest) {
  await connectDB();

  try {
    const requestBody = await req.json();
    const { team_id, season, round, round_match_date, line_ups }: CreateTeamLineupBody = requestBody;

    if (!season || !round)
      return NextResponse.json({
        status: 400,
        message: "Season and round number is required!",
      });

    const duplicateTeam = await LineUps.findOne({ team_id, season, round });
    if(duplicateTeam) return NextResponse.json({ status: 400, message: "Team has already exist!"})

    const lineupData = await LineUps.create({
      team_id, season, round, round_match_date, line_ups
    });

    return NextResponse.json({ status: 200, data: lineupData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Error fetching todos",
    });
  }
}
