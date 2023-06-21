const hydrate = (plant) => {
  return {
    ...plant,
    water: (plant.water || 0) + 1
  }
};
