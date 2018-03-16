export const loadState = () => {
  try {
    const state = localStorage.state;
    if (!state) return undefined;
    return JSON.parse(state);
  } catch (err) {
    console.log(err);
    return undefined
  }
};

export const saveState = (state) => {
  try {
    localStorage.state = JSON.stringify(state);
  } catch (err) {
    console.log(err);
  }
}
