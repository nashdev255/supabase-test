import Image from 'next/image'
import { Inter } from 'next/font/google';
import TodoApp from '../components/TodoApp';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name='description' content='Generated by create Next App' />
      </Head>
      <section className='flex justify-center items-center h-screen'>
        <TodoApp />
      </section>
    </>
  );
};
