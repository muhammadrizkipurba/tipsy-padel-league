export interface TeamData {
  _id: string;
  team_name: string;
  captain_name: string;
  members: {
    _id: string;
    name: string;
    level: string;
    is_captain: boolean;
  }[];
}

export interface LineUpData {
  _id: string;
  team_id: {
    _id: string;
    team_name: string;
  };
  season: number;
  round: number;
  round_match_date: string;
  line_ups: {
    match: number;
    player_1_name: string;
    player_1_level: string; // silver | bronze | women
    player_2_name: string;
    player_2_level: string; // silver | bronze | women
  }[];
}

export const getAllTeamsData = async ({ season }: { season: number }) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/teams?season=${season}`
    ); // Use full URL for server-side fetch
    if (!res.ok) {
      throw new Error(`Failed to fetch user: ${res.statusText}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};

export const getAllTeamsLineupData = async ({ season, round, team_id }: { season: number, round: string, team_id?: string }) => {
  try {
    let apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/lineups?season=${season}&round=${round}`;
    if(team_id) apiUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/lineups?season=${season}&round=${round}&team_id=${team_id}`;
    const res = await fetch(apiUrl); // Use full URL for server-side fetch
    if (!res.ok) {
      throw new Error(`Failed to fetch user: ${res.statusText}`);
    }

    const response = await res.json();
    return response;
  } catch (error) {
    console.error("Error fetching user:", error);
    return null;
  }
};
