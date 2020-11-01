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

type EMOTION_DATA = {
  joyScore: number;
  sadnessScore: number;
  fearScore: number;
};

type PROVINCE_SCORE = {
  name: string,
  Emotion: number,
}

export type { SCORE_DATA, SCORE_DATA_API, EMOTION_DATA, PROVINCE_SCORE };
