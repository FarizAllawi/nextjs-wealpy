"use client"
import { useState } from "react";
import {useSelector} from "react-redux";

import {Input} from "@/components";
import {IcSearch} from "@/public/images";
import {UseForm} from "@/lib";

export default function SearchNews(props){

  const category = ['all-news','finance','business','technology'];
  const { globalReducer } = useSelector((state => state))


  const [toggleSearch, setToggleSearch] = useState(false);
  const [selected, setSelected] = useState('all-news');
  const [state, setState, newState] = UseForm({
    search : ''
  })

  const capitalizeWord = (words) => {
    let separateWord = words.toLowerCase().split('-');
    for (let i = 0; i < separateWord.length; i++) {
      separateWord[i] = separateWord[i].charAt(0).toUpperCase() +
        separateWord[i].substring(1);
    }
    return separateWord.join(' ');
  }

  const onChange = (item) => {
   setSelected(item);
  }

  return (
    <div className="flex flex-row place-content-center items-center space-x-2 mt-16 lg:mt-0 px-6 lg:px-0">
      <div className="w-4/5 lg:w-3/4 flex flex-grow place-content-start items-center gap-2">
        {
          toggleSearch ? (
            <div className="w-full">
              <Input  type='text'
                      name="search"
                      className=''
                      placeholder='Berita apa yang ingin dicari?'
                      value={state.search}
                      onChange={setState}/>
            </div>
          ) : (
            <div className="w-full h-14 flex items-center place-content-center">
              <div className="snap-x relative w-full flex space-x-2 overflow-x-auto scrollbar-none">
                {
                  category.map((item, index) => {
                    return(
                      <div key={index} className="snap-start shrink-0">
                        <div className={`px-5 py-2 ${item === selected ? 'bg-green-500' : 'bg-gray-800'} 
                                 hover:bg-opacity-90 text-xs lg:text-sm font-medium text-white rounded-full cursor-pointer`}
                             onClick={() => onChange(item)}>
                          {capitalizeWord(item)}
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        }

      </div>
      <div className="w-10 lg:w-1/4 flex place-content-end items-center">
        {
          globalReducer.windowSize.width <= 1024 ? (
            <>
              <div className="w-10 h-10 flex items-center place-content-center bg-gray-800 bg-opacity-40 rounded-full"
                    onClick={() => setToggleSearch(!toggleSearch)}>
                <IcSearch width={16}/>
              </div>
            </>
          ) : (
            <div className="w-full">
              <Input  type='text'
                      name="search"
                      className=''
                      placeholder='Berita apa yang ingin dicari?'
                      value={state.search}
                      onChange={setState}
                      append={<IcSearch width={16}/>}/>
            </div>
          )
        }

      </div>
    </div>
  )
}