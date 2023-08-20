import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 text-gray-900'>
      <Image
        className='object-contain w-full md:w-1/2 rounded'
        src={'https://i.imgur.com/UaSyFa0.png'}
        alt='Novel Universe'
        height={200}
        width={500}
      />

      <h1 className='text-4xl font-bold'>Novel Universe</h1>
    </main>
  );
}
