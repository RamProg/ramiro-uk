const useScroll = () => {
  const scrollToNext = (isAtBottomParam?: boolean) => {
    const isAtBottom = isAtBottomParam ?? window.scrollY > 50;
    const top = isAtBottom ? 0 : document.documentElement.scrollHeight;

    scrollTo({ top, behavior: 'smooth' });
  };

  return { scrollToNext };
};

export default useScroll;
