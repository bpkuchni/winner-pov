interface ValorantMap {
  MapID: number;
  Name: string;
  ImageUrl: string;
}

interface Rank {
  rankId: number;
  name: string;
  iconSmallUrl: string;
  iconBigUrl: string;
}

interface Player {
  playerId: string;
  name: string;
  tag: string;
  level: number;
  thumbnailUrl: string;
  portraitUrl: string;
  landscapeUrl: string;
  mmr: number;
  isEligible: boolean;
  score: number;
  rank: Rank;
}

interface Match {}

interface PlayerStat {}
