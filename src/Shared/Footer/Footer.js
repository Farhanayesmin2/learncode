import React from 'react';
import Carousels from '../Carousels/Carousels';
import {BsFacebook,BsTwitter,BsGithub,BsDribbble,BsInstagram ,BsWhatsapp} from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='container mx-auto  mt-5'>
            <div>
                <Carousels></Carousels>
            </div>
            
           
            <div className='mt-8 '>
           
<footer class="p-4 bg-white sm:p-6 dark:bg-gray-900">
    <div class="md:flex md:justify-between">
        <div class="mb-6 md:mb-0">
            <a href="https://flowbite.com/" class="flex items-center">
                <img src="https://toppng.com/uploads/preview/free-fire-png-logo-115690680921wyscrhw1c.png" className="mr-3 h-12" alt="FlowBite Logo"/>
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Learn Code</span>
            </a>
        </div>
        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://flowbite.com/" class="hover:underline">Learn Code</a>
                    </li>
                    <li>
                        <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                    </li>
                    <li>
                        <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                    </li>
                </ul>
            </div>
            <div>
                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                <ul class="text-gray-600 dark:text-gray-400">
                    <li class="mb-4">
                        <a href="#" class="hover:underline">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8"/>
    <div class="sm:flex sm:items-center sm:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">?? 2022 <a href="https://flowbite.com/" class="hover:underline">Learn Code???</a>. All Rights Reserved.
        </span>
        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <Link className='text-blue-600'> <BsFacebook></BsFacebook>  </Link>
                            <BsWhatsapp className='text-green-500'></BsWhatsapp>
                            <BsTwitter className='text-cyan-400'></BsTwitter>
                            <BsInstagram className='text-rose-700' ></BsInstagram>
                            <BsGithub className='text-gray-600'  > </BsGithub>
                            <BsDribbble className='text-purple-900'></BsDribbble>
           
          
        </div>
    </div>
</footer>

            </div>
        </div>
    );
};

export default Footer;