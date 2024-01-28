import Link from '@/node_modules/next/link';
import Image from '@/node_modules/next/Image';

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/main-bg.webp)"}}>
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[50px] text-white font-semibold">
            Make anything possible with 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              E-commerce Analyst and Full-Stack Developer
            </span>
          </h1>
          <p className="text-gray-200 hidden md:block">
            Lucas é um analista de e-commerce e desenvolvedor full-stack freelancer, com interesse em seguir carreira acadêmica como professor de tecnologia da informação.
          </p>
          <div className="flex-col md:flex-row hidden md:flex">
            <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              Ler mais...
            </Link>
            <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Meus projetos
            </Link>
            <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
              <div className="absolute rounded-[20px] z-[1] bg-white inset-0 opacity-0 group-hver:opacity-20" />
              Contato
            </Link>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-10 z-[10] right-5  flex-col md:hidden">
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Ler mais...
        </Link>
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Meus projetos
        </Link>
        <Link href="/my-skills" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
          Contato
        </Link>
      </div>

      <div className="absolute bottom-0 right-0 z-[10]">
        <Image 
          src={'/horse.png'} 
          alt={'horse'}
          height={300}
          width={300}
          className="absolute right-55 top-40"
        />
      </div>

    </main>
  );
}
