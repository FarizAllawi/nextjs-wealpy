"use client"

import Link from "next/link";
import {Slugify} from "@/lib";
import {CardCourse, Pagination} from "@/components";

export default function ListCourse() {
  let course = []
  let recordingClass = []

  for (let item=0; item<12; item++) {
    course.push({
      title: 'Mengenal Kewajiban Pajak Investor',
      videos: 20,
      tingkat: 'Beginner'
    })
  }

  for (let item=0; item<12; item++) {
    recordingClass.push({
      title: 'Mengenal Kewajiban Pajak Investor',
      time: '31:16',
      tingkat: 'Beginner'
    })
  }

  const onPageChange = () => {}

  return (
    <div className="flex flex-col space-y-4">
      <div className="text-white text-sm">Menampilkan 12 dari 48 Modul</div>
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
      <div className="w-full py-4">
        <Pagination data={course} dataPerPage={2} initialOffsetData={course} offsetData={course} onPageChange={onPageChange}/>
      </div>
      <div className="flex place-content-center items-center py-8 bg-gray-800 bg-opacity-40 rounded-2xl">
        <div className="font-medium text-white text-sm">
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