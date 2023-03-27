import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
import '../public/logo.jpg'

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-gray-400 py-8">
        <div className="md:float-left block">
        <img className='inline relative bottom-2 mr-3 rounded-lg' src='/logo.jpg' alt='logo' width='40' height='40' />
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">CodeBloggy</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
