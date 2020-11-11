const SHAPE_TYPES = {
  triangle: "triangle",
  circle: "circle",
  rectangle: "rectangle"
};

const SHAPE_WEIGHTS = {
  "1kg": 1,
  "2kg": 2,
  "3kg": 3,
  "4kg": 4,
  "5kg": 5,
  "6kg": 6,
  "7kg": 7,
  "8kg": 8,
  "9kg": 9,
  "10kg": 10
};

const GAME_STATUSES = {
  waiting: "Waiting",
  inProgress: "In Progress",
  paused: "Paused",
  lost: "Lost"
};

const NEXT_GAME_STATUS_MAPPING = {
  [GAME_STATUSES.waiting]: GAME_STATUSES.inProgress,
  [GAME_STATUSES.inProgress]: GAME_STATUSES.paused,
  [GAME_STATUSES.paused]: GAME_STATUSES.inProgress
};

const HORIZONTAL_POSITIONS = {
  "0": 0,
  "1": 100,
  "2": 200,
  "3": 300,
  "4": 400
};

export const ARROW_KEY_CODES = {
  left: 37,
  right: 39
};

const VERTICAL_STEP = 1;
const HORIZONTAL_STEP = 100;

export {
  SHAPE_TYPES,
  HORIZONTAL_POSITIONS,
  GAME_STATUSES,
  NEXT_GAME_STATUS_MAPPING,
  VERTICAL_STEP,
  HORIZONTAL_STEP,
  SHAPE_WEIGHTS
};
