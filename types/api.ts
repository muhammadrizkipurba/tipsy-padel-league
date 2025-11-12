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

export interface CreateMatchRequestBody {
  match: 1,
  match_date: string; // DD-MM-YYYY
  season: number;
  round: number;
  court: string;
  team_1_lineup_id: string;
  team_2_lineup_id: string;
  match_result: {
    team_1_score: number;
    team_2_score: number;
    winner: string;
  };
  team_point_earn: number;
}
