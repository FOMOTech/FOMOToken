
import React, { useState } from "react";
import Container from "./container";

export default function SwapSection() {
  return (
    <Container className='p-0'>
    <div class="flex w-full" id="model">
      <div class="items-center">
        <div class="flex flex-col w-full mt-4">
          <h3 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Revenue Model</h3>
          <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">Tokens can use Daily FOMO Tech to send buy notifications within Telegram. Notifications include an ad unit that is available to purchase through the FOMO ad network. </p>
        </div>
        <div class="w-full mt-5">
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Scaleable buy bot</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400">A free to use buy bot for tokens</p>
            </div>
          </div>
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Real-time trending</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400">The most accurate list of what’s trending</p>
            </div>
          </div>
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Group Rewards</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400">Rewards paid in FOMO</p>
            </div>
          </div>
        </div>
      </div>
      <div class="items-right">
        <iframe width="400" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x93b2186ADbc3f3ea85EA4c6AC0FB5017975A7c07&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=0x93b2186ADbc3f3ea85EA4c6AC0FB5017975A7c07&onRampLockToken=false&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%23052cc8&backgroundColor=transparent&roundedCorners=10&padding=20&refId=hLymmL" ></iframe>
    </div>
    </div>
    
    
        

        
    
    </Container>
  );
}
