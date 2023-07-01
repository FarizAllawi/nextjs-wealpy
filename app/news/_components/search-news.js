"use client"
import { useState } from "react";
import {Input} from "@/components";
import {IcSearch} from "@/public/images";
import {UseForm} from "@/lib";

export default function SearchNews(props){

  const category = ['all-news','finance','business','technology'];


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
    <div className="flex flex-row place-content-center items-center mt-8 2xl:px-32">
      <div className="w-3/4 flex flex-row place-content-start items-center gap-2">
        {
          category.map((item, index) => {
            return(
              <div key={index}
                   className={`px-5 py-2 ${item === selected ? 'bg-green-500' : 'bg-gray-800'} hover:bg-opacity-90 text-sm font-medium text-white rounded-full cursor-pointer`}
                   onClick={() => onChange(item)}>
                {capitalizeWord(item)}
              </div>
            )
          })
        }
      </div>
      <div className="w-1/4 flex place-content-end items-center">
        <div className="w-full">
          <Input  type='text'
                  name="search"
                  className=''
                  placeholder='Berita apa yang ingin dicari?'
                  value={state.search}
                  onChange={setState}
                  append={<IcSearch width={16}/>}/>
        </div>
      </div>
    </div>
  )
}