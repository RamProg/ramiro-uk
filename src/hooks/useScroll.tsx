const useScroll = () => {
  const scrollToNext = () => {
    const top = window.scrollY > 50 ? 0 : window.innerHeight;

    setTimeout(function () {
      window.scrollTo({ top, behavior: 'smooth' });
    }, 0);
  };

  return { scrollToNext };
};

export default useScroll;
