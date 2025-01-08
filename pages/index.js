import Link from 'next/link';
import { links } from '../data';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-10">
      <h1 className="text-4xl mb-4">Link List</h1>
      <ul>
        {links.map((link, index) => (
          <li key={index} className="mb-2">
            <Link href={link.url}>
              <a className="text-blue-400 hover:text-blue-300">{link.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}