import { SCORE_DATA, SCORE_DATA_API } from "./types";

const normalizeScoreData = (scoreData: SCORE_DATA_API) => {
  if (!scoreData || Array.isArray(scoreData)) {
    return;
  }

  const COUNTRY_SCORE = {
    JOY_SCORE: 0,
    FEAR_SCORE: 0,
    SADNESS_SCORE: 0,
  };

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

    COUNTRY_SCORE.JOY_SCORE += JOY_SCORE;
    COUNTRY_SCORE.FEAR_SCORE += FEAR_SCORE;
    COUNTRY_SCORE.SADNESS_SCORE += SADNESS_SCORE;
  });

  return NORMALIZED_LIST;
};

const normalizeEmotionData = (emotionData) => {
  if (!emotionData || Array.isArray(emotionData)) {
    return;
  }

  const NORMALIZED_LIST = [] as SCORE_DATA[];

  Object.keys(emotionData).forEach((scoreKey: string) => {
    const SCORE_ITEM: SCORE_DATA = emotionData[scoreKey].text;
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
      ...emotionData[scoreKey].text,
      score,
    });
  });

  return NORMALIZED_LIST;
};

export { normalizeScoreData, normalizeEmotionData };
