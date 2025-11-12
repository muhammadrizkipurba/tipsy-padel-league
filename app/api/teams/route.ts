import connectDB from "@/lib/mongodb";
import Teams from "@/models/teamsModel";
import { CreateTeamRequestBody } from "@/types/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await connectDB();
  try {
    const { searchParams } = new URL(req.url);
    const team_id = searchParams.get("team_id");
    const season = searchParams.get("season");

    if (!season)
      return NextResponse.json({
        status: 400,
        message: "Season number is required!",
      });
    if (team_id) {
      const singleTeamData = await Teams.findOne({ team_id, season }).select("_id team_name captain_name members season");
      return NextResponse.json({ status: 200, data: singleTeamData });
    } else {
      const allTeamData = await Teams.find({ season });
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
    const { team_name, season, members, captain_name }: CreateTeamRequestBody = requestBody;

    if (!season)
      return NextResponse.json({
        status: 400,
        message: "Season number is required!",
      });

    const duplicateTeam = await Teams.findOne({ team_name: new RegExp(team_name, "i"), season, captain_name: new RegExp(captain_name, "i") });
    if(duplicateTeam) return NextResponse.json({ status: 400, message: "Team has already exist!"})

    const teamData = await Teams.create({
      team_name,
      captain_name,
      season,
      members
    });

    return NextResponse.json({ status: 200, data: teamData });
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      status: 500,
      message: "Internal server error.",
    });
  }
}
