export const FORMAT_STATE_NAME = (stateName) => {
  return stateName.replace(" State", "").replace(" Region", "").replace(" Zone", "").replace(" Provine", "").replace(" District", "").replace(" Municipality", "");
};
