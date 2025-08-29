import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 -mt-25">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-center">
        <img 
        src="img/map.jpg" 
        alt="" 
        className="transition transform hover:-translate-y-2 hover:shadow-lg rounded-md"
      />
        <ol className="font-mono text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em] text-center ml-5 transition transform hover:-translate-y-1 ">
          Indonesia adalah negara kepulauan terbesar di dunia, dengan lebih dari 17.000 pulau yang tersebar di sepanjang khatulistiwa.
          kita harus menjaga keindahan alam ini dengan tidak membuang sampah sembarangan dan mengurangi penggunaan plastik sekali pakai.
          dan kita juga harus melestarikan budaya dan tradisi yang ada di setiap daerah di Indonesia.
        </li>        
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className=""
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
           
          </a>
          <a
            className=""
            
            rel="noopener noreferrer"
          >
            
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          rel="noopener noreferrer"
        >
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
         
          rel="noopener noreferrer"
        >
         
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
         
          rel="noopener noreferrer"
        >
         
        </a>
      </footer>
    </div>
  );    
}
