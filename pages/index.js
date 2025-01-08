import Link from 'next/link';
import { links } from '../data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-indigo-900 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white bg-opacity-10 rounded-lg shadow-lg text-white">
        <h1 className="text-4xl mb-6 text-center font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Link List</h1>
        <ul className="space-y-4">
          {links.map((link, index) => (
            <li key={index} className="transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              <Link href={link.url}>
                <a className="block p-4 bg-gray-800 bg-opacity-50 rounded-lg text-center text-lg font-semibold text-blue-300 hover:text-blue-200">
                  {link.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}