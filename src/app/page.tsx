import CardPost from "@/components/CardPost/CardPost";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="w-full max-w-[1120px] flex flex-col mx-auto mt-12 pb-5 px-4">
      <div className="">
        <Header/>
      </div>  
      <Link href='/post' className="hover:brightness-75 transition-all">
      <div className="w-full flex-1 flex gap-8 items-center justify-center mt-10 mb-10">
        <div className="flex flex-1 h-[334px] relative rounded-2xl overflow-hidden">
         <Image
         src="https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt=""
         fill={true}
         style={{objectFit: 'cover'}}
        />
        </div>
        <div className="flex flex-1 h-[334px] flex-col gap-6">
          <h1 className="font-bold text-[40px] text-blue-600">Como desenvolverum blog com NextJS</h1>
          <p className="text-zinc-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi voluptatem in, ipsa natus possimus facilis deleniti? Atque, rerum cupiditate nemo voluptatibus harum enim impedit culpa fugiat beatae officia, inventore qui...</p>
          <div>
          <p className="font-bold text-zinc-900">Nome do Autor</p>
          <p className="text-zinc-600 text-sm">20 de novembro de 2024</p>
        </div>
        </div>
      </div>
      </Link>
      <div className="grid grid-cols-3">
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      <CardPost/>
      </div>
     
    </div>
  );
}
