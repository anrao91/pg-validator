//helper functions
import _ from "lodash";
export const containsObj = (obj, list) => {
  return !!list.find((listItem) => _.isEqual(listItem, obj));
};
