import Circle from "./Circle";
import Triangle from "./Triangle";
import Rectangle from "./Rectangle";

import { SHAPE_TYPES } from "utils/constants";

const shapeMapping = {
  [SHAPE_TYPES.triangle]: Triangle,
  [SHAPE_TYPES.circle]: Circle,
  [SHAPE_TYPES.rectangle]: Rectangle
};

function Shape({type, ...props}) {
  const Component = shapeMapping[type];

  return <Component {...props} />;
}

export default Shape;
