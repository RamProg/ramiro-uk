const useScroll = () => {
  const scrollToNext = () => {
    const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight;
    const top = isAtBottom ? 0 : document.documentElement.scrollHeight - window.innerHeight;

    setTimeout(function () {
      window.scrollTo({ top, behavior: 'smooth' });
    }, 0);
  };

  return { scrollToNext };
};

export default useScroll;
