import { useState } from 'react';
import Item from './Item';
import Carousel from 'react-bootstrap/Carousel';

export default function BookmarkCarousel({ bookmarks }) {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex) => {
          setIndex(selectedIndex);
     };
     return (
          <div>
               {
                    bookmarks.length
                         ? bookmarks.map(bookmark => (
                              <div key={bookmark._id}>
                              <Carousel activeIndex={index} onSelect={handleSelect}>
                                   <Carousel.Item>
                                        <img src={bookmark.url} alt=" "> </img>
                                   </Carousel.Item>
                              </Carousel>
                              </div>
                         ))
                         : <>
                              <h2>No Bookmarks Yet... Add one in the Form Above</h2>
                         </>
               }
          </div>
     )
}
