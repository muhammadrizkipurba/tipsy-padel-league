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
