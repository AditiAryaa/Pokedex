function useDebounce(cb, delay = 2000) {
  let timerid;
  return (...args) => {
    console.log(...args);
    clearTimeout(timerid);
    timerid = setInterval(() => {
      cb(...args);
    }, delay);
  };
}

export default useDebounce;
