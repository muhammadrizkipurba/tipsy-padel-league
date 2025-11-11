export interface TeamData {
  _id: string;
  team_name: string;
  captain_name: string;
  members: {
    _id: string;
    name: string;
    level: string;
    is_captain: boolean;
  }[]
}

export const getAllTeamsData = async({ season }: {season: number}) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/teams?season=${season}`); // Use full URL for server-side fetch
    if (!res.ok) {
      throw new Error(`Failed to fetch user: ${res.statusText}`);
    };

    const response = await res.json();
    return response;
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }

};