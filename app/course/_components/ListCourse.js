"use client"

import Link from "next/link";
import {Slugify, DataColumn} from "@/lib";
import {CardCourse, Pagination} from "@/components";
import {useSelector} from "react-redux";


const GetCourse = () => {
  let course = []
  const {globalReducer} = useSelector(state => state)

  for (let item=0; item<12; item++) {
    course.push({
      title: 'Mengenal Kewajiban Pajak Investor',
      videos: 20,
      tingkat: 'Beginner'
    })
  }


  return {
    course: globalReducer.windowSize.width <= 1024 ? DataColumn(course, 2) : course ,
  }

}


export default function ListCourse() {
  let { course } = GetCourse()

  const {globalReducer} = useSelector(state => state)

  const onPageChange = () => {}

  return  (
    <div className="flex flex-col space-y-4">
      <div className="text-white text-sm">Menampilkan 12 dari 48 Modul</div>
      {
        globalReducer.windowSize.width <= 1024 ? (
          <div className="flex flex-row space-x-4">
            <div className="w-1/2 flex flex-col space-y-4">
              {
                course.dataCol1.map((item, index) => {
                  return (
                    <Link key={index} href={`${process.env.NEXT_PUBLIC_BASE_URL}/course/${Slugify(item.title)}`}>
                      <CardCourse  item={item} />
                    </Link>
                  )
                })
              }
            </div>
            <div className="w-1/2 flex flex-col space-y-4">
              {
                course.dataCol2.map((item, index) => {
                  return (
                    <Link key={index} href={`${process.env.NEXT_PUBLIC_BASE_URL}/course/${Slugify(item.title)}`}>
                      <CardCourse  item={item} />
                    </Link>
                  )
                })
              }
            </div>
          </div>
        ) : (
          <div className="w-full grid grid-cols-3 gap-8">
            {
              course.map((item, index) => {
                return (
                  <Link key={index} href={`${process.env.NEXT_PUBLIC_BASE_URL}/course/${Slugify(item.title)}`}>
                    <CardCourse  item={item} />
                  </Link>
                )
              })
            }
          </div>
        )
      }

      <div className="w-full py-4">
        {
          globalReducer.windowSize.width <= 1024 ? (
            <Pagination data={[...course.dataCol1, ...course.dataCol2]}
                        dataPerPage={2}
                        initialOffsetData={[...course.dataCol1, ...course.dataCol2]}
                        offsetData={[...course.dataCol1, ...course.dataCol2]}
                        onPageChange={onPageChange}/>
          ):(
            <Pagination data={course} dataPerPage={2} initialOffsetData={course} offsetData={course} onPageChange={onPageChange}/>
          )
        }
      </div>
      <div className="flex place-content-center items-center py-8 bg-gray-800 bg-opacity-40 rounded-2xl">
        <div className="font-medium text-white text-xs lg:text-sm">
          Bingung dengan materi ?
          <span>
              <Link href="/" className="ml-1 text-green-500 underline underline-offset-2">
                Tanya Mentor
              </Link>
          </span>
        </div>
      </div>
    </div>
  )
}