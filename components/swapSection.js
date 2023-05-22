import React, { useState } from "react";
import Container from "./container";

export default function SwapSection() {
  return (
    <Container className='sm:p-0 lg:p-8 xl:px-0 flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap '>
    <div class="flex flex-wrap items-start lg:w-2/3" id="model">
      <div>
        <div class="flex flex-col w-full mt-4">
          <h3 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">Buy $FOMO</h3>
          <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">You will be able to buy $FOMO by exchanging it<br/>for BNB on PancakeSwap.  You can also use our <br/>swap widget to exchange other cryptocurrencies or pay in fiat.</p>
        </div>
        <div class="w-full mt-5">
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-[#052cc8] rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">$FOMO has been audited by Cyberscope</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400">Performance optimised</p>
            </div>
          </div>
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-[#052cc8] rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">Liquidity will be locked for 500 days</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400">FOMO is a long term project</p>
            </div>
          </div>
          <div class="flex items-start mt-8 space-x-3">
            <div class="flex items-center justify-center flex-shrink-0 mt-1 bg-[#052cc8] rounded-md w-11 h-11 ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" aria-hidden="true" class="w-7 h-7 text-indigo-50">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"></path>
              </svg>
            </div>
            <div>
              <h4 class="text-xl font-medium text-gray-800 dark:text-gray-200">$FOMO contract address</h4>
              <p class="mt-1 text-gray-500 dark:text-gray-400"><a href="https://bscscan.com/token/0x93b2186ADbc3f3ea85EA4c6AC0FB5017975A7c07">0x93b21...A7c07</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex grow justify-center pl-0 pt-8 md:pt-0 pr-0" id="model">
        <iframe width="100%" height="720" frameborder="0" allow="clipboard-read *; clipboard-write *; web-share *; accelerometer *; autoplay *; camera *; gyroscope *; payment *; geolocation *" src="https://flooz.xyz/embed/trade?swapDisabled=false&swapToTokenAddress=0x93b2186ADbc3f3ea85EA4c6AC0FB5017975A7c07&swapLockToToken=false&onRampDisabled=false&onRampAsDefault=false&onRampDefaultAmount=200&onRampTokenAddress=0x93b2186ADbc3f3ea85EA4c6AC0FB5017975A7c07&onRampLockToken=false&stakeDisabled=true&network=bsc&lightMode=true&primaryColor=%23052cc8&backgroundColor=transparent&roundedCorners=0&padding=0&refId=hLymmL" ></iframe>
    </div>
    
    
        

        
    
    </Container>
  );
}
