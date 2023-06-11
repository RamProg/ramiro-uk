import FloatingScroll from '@/components/FloatingScroll';
import Main from '@/components/Main/Main';
import Nav from '@/components/Nav';

export default function Home() {
  return (
    <div>
      <Main />
      <Nav />
      <FloatingScroll direction='down' />
    </div>
  );
}
