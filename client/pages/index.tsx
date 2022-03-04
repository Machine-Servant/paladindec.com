import type { NextPage } from 'next';
import Link from 'next/link';
import { BasicLayout } from '../components/basic-layout';

const Home: NextPage = () => {
  return (
    <BasicLayout title="Home" description="Home page">
      <Link href="/login">Log in</Link>
    </BasicLayout>
  );
};

export default Home;
