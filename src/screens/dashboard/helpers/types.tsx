type SCORE_DATA = {
  provinceName: string;
  joyScore: number;
  sadnessScore: number;
  fearScore: number;
  score: string;
};

type SCORE_DATA_API = {
  [name: string]: SCORE_DATA;
};

export type { SCORE_DATA, SCORE_DATA_API };
