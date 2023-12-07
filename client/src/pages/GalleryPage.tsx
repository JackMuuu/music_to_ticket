import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../tailwind.css'
import './GalleryPage.css'


interface Image {
  url: string
  width: Number
  height: Number
}
interface Event {
  name: string,
  date: string,
  time: string,
  url: string,
  images_url: string
}
interface Artist {
    id: string,
    name: string,
    image: Image[],
    // ticket: {
    //   events: Event[]; // Adjusted this line to represent events as an array of Event objects
    // }[];
    ticket: Event[]
}

function fetchArtistList() {
    const [artistList, setArtistList] = useState<Artist[] | null>(null);
    // const [artists, ticket] = artistList || [null, null];

    useEffect(() => {
        const fetchArtistData = async () => {
            try {
                // const response = await axios.get('http://localhost:8000/ticket/events', { withCredentials: true });
                const response = await axios.get('http://localhost:8000/spotify/v0/artist', { withCredentials: true });
                console.log("gallery", response.data)
                setArtistList(response.data);
            } catch (error) {
                console.error('Error fetching artist data:', error);
            }
        };

        fetchArtistData();
    }, []);
    
    if (artistList !== null){
      return (
        <div className = "flex justify-center w-full">
          <ul role="list" className="divide-y divide-gray-100 flex flex-col items-center">
            {artistList.map((artist) => (
              <li key={artist.id} className="flex items-center gap-x-6 py-5">
                <div className="flex min-w-0 max-w-20 gap-x-4">
                  <img className="h-24 w-24 rounded-full bg-gray-50 mr-3" src={artist.image[2].url} alt="artist_img" />
                  <div className="min-w-3 flex-auto">
                    <p className="text-3xl font-semibold leading-6 text-gray-900">{artist.name}</p>
                    {/* <p className="mt-1 truncate text-xs leading-5 text-gray-500">{artist.id}</p> */}
                  </div>
                </div>
                <div>
                  {/* {artist.ticket.map((ticket, index) => (
                      <div key={index}>
                        {ticket.events.length > 0 ? (
                          // Access event properties here, e.g., ticket.events[0].date
                          <p>{ticket.events[0].date}</p>
                        ):(
                          <p>no info</p>
                        )
                      }
                      </div>
                  ))} */}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
      )
    }
    else{
      return "loading"
    }
    
}
export default fetchArtistList;
  // export default function Gallery() {
  //   return (
  //     <ul role="list" className="divide-y divide-gray-100 content-center">
  //       {people.map((person) => (
  //         <li key={person.email} className="flex justify-center items-center gap-x-6 py-5 max-w-3xl w-full">
  //           <div className="flex min-w-0 max-w-20 gap-x-4">
  //             <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
  //             <div className="min-w-0 flex-auto">
  //               <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
  //               <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
  //             </div>
  //           </div>
  //           <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
  //             <p className="text-sm leading-6 text-gray-900">{person.role}</p>
  //             {person.lastSeen ? (
  //               <p className="mt-1 text-xs leading-5 text-gray-500">
  //                 Last seen <time dateTime={person.lastSeenDateTime}>{person.lastSeen}</time>
  //               </p>
  //             ) : (
  //               <div className="mt-1 flex items-center gap-x-1.5">
  //                 <div className="flex-none rounded-full bg-emerald-500/20 p-1">
  //                   <div className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
  //                 </div>
  //                 <p className="text-xs leading-5 text-gray-500">Online</p>
  //               </div>
  //             )}
  //           </div>
  //         </li>
  //       ))}
  //     </ul>
  //   )
  // }
  