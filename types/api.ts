export interface CreateTeamRequestBody {
  season: number;
  team_name: string;
  captain_name: string;
  members: {
    name: string;
    level: string; // silver | bronze | women
    is_captain: boolean;
  }[];
}

export interface CreateTeamLineupBody {
  team_id: string;
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
