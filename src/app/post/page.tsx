import CardPost from "@/components/CardPost/CardPost";
import Header from "@/components/Header/Header";
import Image from "next/image";
import Link from "next/link";


export default function Post() {
    return(
        <div className="w-full max-w-[1120px] flex flex-col mx-auto mt-12 pb-5">  
      <Header/>
     
      <div className="w-ful h-full mt-8 flex flex-col">
        <div className="flex w-full h-[392px] relative rounded-2xl overflow-hidden">
         <Image
         src="https://images.unsplash.com/photo-1518933165971-611dbc9c412d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
         alt=""
         fill={true}
         style={{objectFit: 'cover'}}
        />
        </div>
      </div> 
      <div className="flex w-full flex-col mt-4">
          <h1 className="font-bold text-[40px] text-blue-600">Como desenvolverum blog com NextJS</h1>
          <div>
          <p className="font-bold text-zinc-900">Nome do Autor</p>
          <p className="text-zinc-600 text-sm">20 de novembro de 2024</p>
        </div>
        <p className="text-zinc-600 mt-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore natus voluptatem minus est vitae velit! Veritatis sequi dolores corrupti eos assumenda consequuntur. Tempore aspernatur nisi quas dolorem culpa. Voluptatibus, dolores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, modi quisquam facilis libero cum voluptate aut minima perspiciatis totam voluptates quod repellat soluta sint id quia reiciendis, sequi, iste enim?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum aperiam dolorum quos fuga quaerat veritatis aspernatur placeat non explicabo error, ducimus soluta, possimus molestias culpa, eum illo. Fuga, veniam in!
        
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam neque itaque, nesciunt repellendus consequatur illum qui quisquam natus molestias possimus illo asperiores, commodi magni iusto, nihil rerum accusamus quis inventore?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore perferendis adipisci similique numquam itaque praesentium assumenda quo, officiis, facilis quae accusantium laboriosam, totam ipsum ea? Molestiae accusamus minus a beatae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi ea numquam tenetur similique! Id voluptatibus, deleniti consequuntur quaerat quidem obcaecati quis, nulla sequi saepe natus porro odio maiores, veniam pariatur.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dignissimos rem distinctio et sapiente quod dicta temporibus quo nam nulla, incidunt aperiam minima dolorum quas doloremque dolor. Maxime, deserunt facilis! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus sit dignissimos alias quia illum, quidem expedita temporibus quod exercitationem, nesciunt provident delectus quam ipsa, soluta quasi tempora voluptatem rem eum.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore tenetur, est alias fugiat modi quod? Architecto, inventore sapiente ullam tempore, ab commodi, et laudantium neque nesciunt quisquam similique! Vel, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis reprehenderit deleniti, non nulla, asperiores perspiciatis placeat nesciunt, cum eaque molestias officiis delectus. Sequi deserunt in minus optio laborum aspernatur sed. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos possimus laudantium illo, dolores, molestiae sequi earum, totam obcaecati dolor maxime doloremque cupiditate ipsa corporis ex beatae veniam? Distinctio, ullam alias!
        </p>
        </div>  
    </div>
    )
}