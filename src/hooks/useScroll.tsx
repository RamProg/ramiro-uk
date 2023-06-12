const useScroll = () => {
  const scrollToNext = () => {
    const top = window.scrollY > 50 ? 0 : window.innerHeight;

    window.scrollTo({
      top,
      behavior: 'smooth',
    });

  };

  return { scrollToNext };
};

export default useScroll;
