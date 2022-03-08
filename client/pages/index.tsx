import type { NextPage } from 'next';
import Link from 'next/link';
import { BasicLayout } from '../components/basic-layout';

const Home: NextPage = () => {
  return (
    <BasicLayout title="Home" description="Home page">
      <div className="absolute flex items-center justify-center w-screen h-screen from-blue-500 to-blue-50 bg-gradient-to-b">
        <Link href="/login" passHref>
          <button className="px-20 py-4 font-bold border-2 shadow-2xl shadow-black-800 border-black-50 rounded-3xl bg-green-50 text-white-50">
            Log in
          </button>
        </Link>
      </div>
    </BasicLayout>
  );
};

export default Home;
