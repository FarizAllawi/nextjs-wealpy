'use client'
import {useState, useEffect, useCallback} from 'react'
import useSWR from 'swr'

import { Input, Radio } from '@/components'
import { IcSearch} from '@/public/images'
import {Slugify} from "@/lib";
import {useDispatch, useSelector} from "react-redux";
import {setDataCategory} from "@/redux/slices/global-slice";

async function getCategory(url) {
  const res = await fetch(url)
  .then(res => res.json())
  .then( data => {
    if (data.status === 'success') {
      return data.data;
    } else {
      // error handler here
    }

  })
  return res
}
export default function CardFilter() {

  const { globalReducer } = useSelector(state => state);
  const dispatch = useDispatch();

  const { data: dataCategory, error} = useSWR(
    `${process.env.NEXT_PUBLIC_API_HOST}/v1/category` !== undefined ?
    `${process.env.NEXT_PUBLIC_API_HOST}/v1/category` : null,
    getCategory
  );

  const [search, setSearch] = useState('');
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedLevel, setSelectedLevel] = useState([]);

  const reset = () => {
    setSearch('');
    setSelectedCategory([]);
    setSelectedLevel([]);
  }

  const selectedLevelAction = (value) => {
    let tempLevel = selectedLevel.slice(); // Create a copy of selectedLevel

    const indexDelete = tempLevel.indexOf(value.target.name);

    if (indexDelete !== -1) {
      tempLevel.splice(indexDelete, 1); // Remove the element at indexDelete
      setSelectedLevel(tempLevel);
    } else {
      tempLevel = [value.target.name, ...tempLevel];
      setSelectedLevel(tempLevel);
    }
  }

  const selectedCategoryAction = (value) => {
    let tempSelectedCategory = selectedCategory.slice(); // Create a copy of selectedLevel

    const indexDelete = tempSelectedCategory.indexOf(value);

    if (indexDelete !== -1) {
      tempSelectedCategory.splice(indexDelete, 1); // Remove the element at indexDelete
      setSelectedCategory(tempSelectedCategory);
    } else {
      tempSelectedCategory = [value, ...tempSelectedCategory];
      setSelectedCategory(tempSelectedCategory);
    }
  }

  const updateCategory =  useCallback( () => {

    if (Array.isArray(dataCategory)) {
      if (category.length === 0 && globalReducer.dataCategory.length !== 0) {
        setCategory(globalReducer.dataCategory);
      }

      if (globalReducer.dataCategory.length === 0) {
        setCategory(dataCategory);
        dispatch(setDataCategory(dataCategory));
      }

      if (globalReducer.dataCategory.length !== dataCategory.length) {
        dispatch(setDataCategory(dataCategory));
        setCategory(dataCategory);
      }
    }
  }, [category.length, dataCategory, dispatch, globalReducer.dataCategory])

  useEffect(() => {
    if (Array.isArray(dataCategory)) {
      if (category.length !== dataCategory.length) {
        updateCategory();
      }
    }

  }, [updateCategory, dataCategory, category])

  return (
    <div className="w-full flex flex-col space-y-4">
      <div className="flex flex-row items-center justify-between">
        <div className="text-white text-sm font-medium">Filter</div>
        <div className="text-green-500 text-sm cursor-pointer" onClick={reset}>Reset</div>
      </div>
      <div className="w-full flex-col space-y-2 bg-gray-800 bg-opacity-40 rounded-2xl p-6">
        <div className="text-white text-sm font-semibold">Cari Modul</div>
        <Input  type='text'
                name="search"
                placeholder='Cari modul yang ingin dicari'
                value={search}
                onChange={data => setSearch(data.target.value)}
                append={<IcSearch width={16}/>}
        />

        <div className="text-white text-sm font-semibold">Tingkatan</div>
        <Radio name="all-level" labelName='Semua Tingkat' checked={selectedLevel.includes('all-level')} onChange={selectedLevelAction}/>
        <Radio name="basic" labelName='Basic' checked={selectedLevel.includes('basic')} onChange={selectedLevelAction}/>
        <Radio name="beginner" labelName='Beginner' checked={selectedLevel.includes('beginner')} onChange={selectedLevelAction}/>
        <Radio name="intermediate" labelName='Intermediate' checked={selectedLevel.includes('intermediate')} onChange={selectedLevelAction}/>
        <Radio name="advance" labelName='Advance' checked={selectedLevel.includes('advance')} onChange={selectedLevelAction}/>
        <Radio name="expert" labelName='Expert' checked={selectedLevel.includes('expert')} onChange={selectedLevelAction}/>

        {
          category.length != 0 && (
            <>
              <div className="text-white text-sm font-semibold mt-2">Ketegori</div>
              <div className="flex flex-wrap gap-2">
                {
                  category?.map((item, index) => {
                    return (
                      <div key={index}
                           className={`px-3 py-1.5 rounded-full ${selectedCategory.indexOf(Slugify(item.name)) > -1 ? 'bg-green-500 hover:bg-opacity-80 ' : 'bg-gray-800 hover:bg-opacity-80 '} font-medium tracking-wide text-white text-xs cursor-pointer`}
                           onClick={() => selectedCategoryAction(Slugify(item.name)) }>
                        {item.name}
                      </div>
                    )
                  })
                }
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}