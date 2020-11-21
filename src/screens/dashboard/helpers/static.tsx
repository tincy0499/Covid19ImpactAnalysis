const LOCATION_DROPDOWN = {
  PLACEHOLDER: "Select a location",
  ITEMS: [
    {
      key: "INDIA",
      value: "INDIA",
      text: "India",
    },
    {
      key: "CANADA",
      value: "CANADA",
      text: "Canada",
    },
  ],
};

const SCORE_KEYS = {
  JOY_SCORE: "joyScore",
  FEAR_SCORE: "fearScore",
  SADNESS_SCORE: "sadnessScore",
};

const DASHBOARD_CONTENT = {
  LOCATION_HEADER: 'Select a location to see the impact of Covid19.',
  SELECT_PROVINCE: 'Select a province/state to see the emotional impact of Covid19.',
  SUBMIT_BUTTON: 'Submit'
};

const BAR_LABEL = {
  NAME: 'name',
  EMOTION: 'Emotion',
};

const EMOTIONS = {
  JOY: 'Joy',
  SADNESS: 'Sadness',
  FEAR: 'Fear',
  NEUTRAL: 'Neutral'
};

const EMOTIONS_EMOJI = {
  [EMOTIONS.JOY]: 'smile',
  [EMOTIONS.SADNESS]: 'cry',
  [EMOTIONS.FEAR]: 'fearful',
};

const EMOTION_BAR_COLORS = {
  [EMOTIONS.JOY]: 'green',
  [EMOTIONS.SADNESS]: 'grey',
  [EMOTIONS.FEAR]: 'red',
};

export { LOCATION_DROPDOWN, SCORE_KEYS, DASHBOARD_CONTENT, BAR_LABEL, EMOTIONS, EMOTIONS_EMOJI, EMOTION_BAR_COLORS };
