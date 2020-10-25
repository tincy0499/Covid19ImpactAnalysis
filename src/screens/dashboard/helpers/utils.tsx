import { SCORE_DATA, SCORE_DATA_API } from "./types";

const normalizeScoreData = (scoreData: SCORE_DATA_API) => {
  const NORMALIZED_LIST = [] as SCORE_DATA[];

  Object.keys(scoreData).forEach((scoreKey: string) => {
    const SCORE_ITEM: SCORE_DATA = scoreData[scoreKey];
    const JOY_SCORE = SCORE_ITEM.joyScore;
    const FEAR_SCORE = SCORE_ITEM.fearScore;
    const SADNESS_SCORE = SCORE_ITEM.sadnessScore;
    let score = "NEUTRAL";

    if (JOY_SCORE >= FEAR_SCORE && JOY_SCORE >= SADNESS_SCORE) {
      score = "Happy";
    } else if (FEAR_SCORE >= JOY_SCORE && FEAR_SCORE >= SADNESS_SCORE) {
      score = "Worried";
    } else {
      score = "Sad";
    }
    NORMALIZED_LIST.push({
      ...scoreData[scoreKey],
      score,
    });
  });

  return NORMALIZED_LIST;
};

export default normalizeScoreData;
