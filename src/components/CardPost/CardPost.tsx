import Image from "next/image";
import Link from "next/link";

export default function CardPost() {
  return (
    <div className="w-full max-w-[352px] h-full flex flex-col items-center justify-between gap-4 mb-5 pb-10">
      <Link href='/post'>
        <div className="flex w-full h-[234px] relative rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="flex w-full flex-1 flex-col justify-between gap-2 mt-4">
          <h1 className="font-bold text-xl text-blue-600">
            Como desenvolverum blog com NextJS
          </h1>
          <p className="text-zinc-600 text-sm">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
            voluptatem in, ipsa natus possimus facilis deleniti? Atque, rerum
            cupiditate nemo ...
          </p>
          <div>
            <p className="font-bold text-zinc-900 text-sm">Nome do Autor</p>
            <p className="text-zinc-600 text-sm">20 de novembro de 2024</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
