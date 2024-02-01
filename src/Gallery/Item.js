import { useState } from 'react'
export default function Item({ bookmark }) {


  return (
    <>
    <img src={bookmark.url} alt={bookmark.url}></img>
    </>
  )
}
