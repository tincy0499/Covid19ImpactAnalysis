import { normalizeScoreData } from '../screens/dashboard/helpers/utils';

const DUMMY_DATA_EMOTIONS_VALID = {
  "Karnataka": {
    "provinceName": "Karnataka",
    "analyticScore": 3.988263,
    "tentativeScore": 1.42615,
    "confidentScore": 0,
    "joyScore": 10,
    "sadnessScore": 100,
    "fearScore": 30
  },
  "Punjab": {
    "provinceName": "Punjab",
    "analyticScore": 4.749525,
    "tentativeScore": 2.139225,
    "confidentScore": 0,
    "joyScore": 30,
    "sadnessScore": 20,
    "fearScore": 100
  }
};

const DUMMY_DATA_EMOTIONS_VALID_EXPECT = [
  {
    "provinceName": "Karnataka",
    "analyticScore": 3.988263,
    "tentativeScore": 1.42615,
    "confidentScore": 0,
    "joyScore": 10,
    "sadnessScore": 100,
    "fearScore": 30,
    "score": "Sad"
  },
  {
    "provinceName": "Punjab",
    "analyticScore": 4.749525,
    "tentativeScore": 2.139225,
    "confidentScore": 0,
    "joyScore": 30,
    "sadnessScore": 20,
    "fearScore": 100,
    "score": "Worried"
  }
];

const DUMMY_DATA_EMOTIONS_INVALID = [
  {
    "provinceName": "Karnataka",
    "analyticScore": 3.988263,
    "tentativeScore": 1.42615,
    "confidentScore": 0,
    "joyScore": 10,
    "sadnessScore": 100,
    "fearScore": 30
  }
];

describe('Running Dashboard Tests', () => {
  test("data normalizer", () => {
    expect(normalizeScoreData(DUMMY_DATA_EMOTIONS_VALID)).toEqual(DUMMY_DATA_EMOTIONS_VALID_EXPECT);
    expect(normalizeScoreData(null)).toEqual(undefined);
    expect(normalizeScoreData(undefined)).toEqual(undefined);
    expect(normalizeScoreData(DUMMY_DATA_EMOTIONS_INVALID)).toEqual(undefined);
  });
});
