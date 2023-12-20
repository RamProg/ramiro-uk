const useScroll = () => {
  const scrollToNext = () => {
    const isAtBottom = window.scrollY > 50;
    const top = isAtBottom ? 0 : document.documentElement.scrollHeight;

    scrollTo({ top, behavior: 'smooth' });
  };

  return { scrollToNext };
};

export default useScroll;
