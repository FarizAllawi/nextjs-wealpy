'use client'

import propTypes from 'prop-types'
import {useState} from 'react';
import ReactPaginate from 'react-paginate';

import {
  IcLeftArrow,
  IcRightArrow
} from '@/public/images'

export default function Pagination(props) {

  const {
    data,
    initialOffsetData,
    dataPerPage,
    paginationName
  } = props

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [dataOffset, setDataOffset] = useState(0)
  const endOffset = dataOffset + dataPerPage
  const offsetData = data.slice(dataOffset, endOffset)

  // We start with an empty list of data.
  const [currentData, setCurrentData] = useState(initialOffsetData.length === 0 ? props.offsetData(offsetData) : [] )
  const pageCount = Math.ceil(data.length / dataPerPage)

  // Invoke when user click to request another page.
  const onPageChange = (event) => {
    const newOffset = (event.selected * dataPerPage) % data.length;
    const endOffset = newOffset + dataPerPage
    const offsetData = data.slice(newOffset, endOffset)
    // console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`)

    const target = {
      target: {
        value: offsetData,
        name: paginationName
      }
    }

    props.onPageChange(target)
    setDataOffset(newOffset)
    window.scrollTo(0, 0)
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel={(<IcRightArrow width={16}/>)}
      previousLabel={(<IcLeftArrow width={16}/>)}
      onPageChange={onPageChange}
      pageRangeDisplayed={5}
      pageCount={pageCount}
      previousClassName="flex place-content-center items-center w-8 h-8"
      previousLinkClassName="text-sm  text-gray-300 font-semibold"
      nextClassName="flex place-content-center items-center w-8 h-8"
      nextLinkClassName="text-sm text-gray-300 font-semibold"
      breakClassName="flex place-content-center items-center w-8 h-8"
      breakLinkClassName="text-sm  text-gray-300 font-semibold"
      pageLinkClassName="text-sm  text-gray-300 font-semibold"
      pageClassName="flex place-content-center items-center w-8 h-8"
      activeClassName="bg-green-500 rounded-full shadow-green"
      containerClassName="flex place-content-center items-center"
      renderOnZeroPageCount={null}
    />
  )
}