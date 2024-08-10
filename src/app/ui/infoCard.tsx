'use client';
import React from 'react';
import { TImage } from '../lib/definitions';

export default function InfoCard<
  T extends { data: { [key: string]: any }; images: TImage[] }
>(props: { data: T; fields: string[]; style?: React.CSSProperties }) {
  return (
    <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-12'>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        {props.data.images.map((el) => (
          <div className='flex w-1/3 flex-wrap'>
            <div className='w-full p-1 md:p-2'>
              <img
                alt='gallery'
                className='block h-full w-full rounded-lg object-cover object-center'
                src={el.url}
              />
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col'>
        <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
          <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
            <div className='overflow-hidden'>
              <table className='min-w-full text-left text-sm font-light text-surface dark:text-white'>
                <thead className='border-b border-neutral-200 font-medium dark:border-white/10'>
                  <tr>
                    <th
                      scope='col'
                      className='px-6 py-4'
                    >
                      Property
                    </th>
                    <th
                      scope='col'
                      className='px-6 py-4'
                    >
                      Data
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.fields.map((el, index) => {
                    if (
                      props.data.data &&
                      typeof props.data.data === 'object'
                    ) {
                      if (props.data.data.hasOwnProperty(el)) {
                        return (
                          <tr className='border-b border-neutral-200 dark:border-white/10'>
                            <td className='whitespace-nowrap px-6 py-4'>
                              {el}
                            </td>
                            <td className='whitespace-nowrap px-6 py-4'>
                              {props.data.data[el]}
                            </td>
                          </tr>
                        );
                      }
                    }
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
