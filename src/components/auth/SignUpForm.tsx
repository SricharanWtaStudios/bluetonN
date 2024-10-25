/**
 * This code was generated by Builder.io.
 */
"use client";
import React from 'react';
import { InputField } from './InputField';

export const SignUpForm: React.FC = () => {
  return (
    <main className="flex flex-wrap bg-white">
      <section className="flex overflow-hidden flex-col my-auto min-w-[240px] w-[880px] max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-start px-20 py-56 w-full min-h-[960px] max-md:px-5 max-md:py-24 max-md:max-w-full">
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d93c2f28c4b06540f60faecc9173f42078e1bdfc9405fa985f7ae22982374545?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&" alt="" className="object-cover absolute inset-0 size-full" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/b358347a165fbe4f2a41b427586dbeaf866125b1442625dbbb49c489d94c4781?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&" alt="Sign up illustration" className="object-contain mb-0 max-w-full aspect-[1.23] w-[628px] max-md:mb-2.5" />
        </div>
      </section>
      
      <section className="flex overflow-hidden flex-col flex-1 shrink justify-center items-center basis-0 min-w-[240px] max-md:max-w-full">
        <div className="flex flex-col justify-center max-w-full w-[456px]">
          <header className="flex flex-col justify-center self-start px-12 max-md:px-5">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/61f9f4efb556098bdede32d2d5060b282810a926196c632098d5acc906b58459?apiKey=dcc7f3c8807f4c038c88f79f5b63c9e1&" alt="Company logo" className="object-contain max-w-full aspect-[3.37] w-[222px]" />
          </header>
          
          <form className="flex flex-col justify-center px-12 py-6 w-full bg-white rounded-2xl max-md:px-5">
            <div className="flex flex-col justify-center w-full">
              <div className="flex flex-col w-full">
                <h1 className="max-w-full text-3xl font-medium text-neutral-900 w-[120px]">
                  Sign Up
                </h1>
                <p className="mt-1 text-lg leading-6 text-zinc-600">
                  Sign up with the credential sent to your email id{" "}
                  <span className="text-zinc-600">pooja@10gmail.com</span>
                </p>
              </div>
              
              <div className="flex flex-col justify-center mt-12 w-full max-w-[360px] max-md:mt-10">
                <div className="flex flex-col justify-center w-full">
                  <InputField label="User Id" value="pooja123@" />
                  <div className="mt-6">
                    <InputField label="Code" value="234656" />
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="flex overflow-hidden justify-center items-center mt-12 w-full text-sm font-bold leading-snug bg-teal-500 rounded-md shadow-sm cursor-pointer text-neutral-50 max-md:mt-10"
                >
                  <span className="self-stretch px-4 py-2.5 my-auto min-h-[40px]">
                    Get Started
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};