import Link from 'next/link';


const Header = () => {
 return (
   <header className="bg-brown text-soft-brown py-4 sticky top-0">
     <nav className="container mx-auto flex justify-between items-center px-4">
       <Link href="/" className="text-2xl font-bold">
         Risky nabil
       </Link>
       <ul className="flex space-x-4 items-center ">
         <li>
           <Link href="/" className="hover:text-amber-500 text-lg font-semibold ">
             Home
           </Link>
         </li>
         <li>
           <Link href="/portofolio" className="hover:text-amber-500 text-lg font-semibold">
             Portfolio
           </Link>
         </li>
         <li>
           <Link href="/blog" className="hover:text-amber-500 text-lg font-semibold">
             Blog
           </Link>
         </li>
       </ul>
     </nav>
   </header>
 );
};


export default Header;