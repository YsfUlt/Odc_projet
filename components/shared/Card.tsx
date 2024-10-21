import { IEvent } from '@/lib/database/models/event.model'
import { formatDateTime } from '@/lib/utils'
import { auth } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { DeleteConfirmation } from './DeleteConfirmation'
import { Button } from '../ui/button';
import DownloadTicket from './DownloadTicket'
// type CardProps = {
//   event: IEvent,
//   hasOrderLink?: boolean,
//   hidePrice?: boolean
// }

// const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer._id.toString();

//   return (
//     <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
//       <Link 
//         href={`/events/${event._id}`}
//         style={{backgroundImage: `url(${event.imageUrl})`}}
//         className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
//       />
//       {/* IS EVENT CREATOR ... */}

//       {isEventCreator && !hidePrice && (
//         <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
//           <Link href={`/events/${event._id}/update`}>
//             <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
//           </Link>

//           <DeleteConfirmation eventId={event._id} />
//         </div>
//       )}

//       <div
//         className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
//       > 
//        {/* {!hidePrice && <div className="flex gap-2">
//           <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
//             {event.isFree ? 'FREE' : `$${event.price}`}
//           </span>
//           <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
//             {event.category.name}
//           </p>
//         </div>} */}

// {!hidePrice ? (
//   <div className="flex gap-2">
//     <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
//       {event.isFree ? 'FREE' : `$${event.price}`}
//     </span>
//     <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
//       {event.category.name}
//     </p>
//   </div>
// ) : (
//   <Button size="lg" className="button sm:w-fit">
//    download tickette
//   </Button>
// )}

//         {/* ila kant hidePrice false afficher le prix et hadchi li lte7t
//          si hideprice True afficher hadchi li lte7t safi bla price  */}
//         <p className="p-medium-16 p-medium-18 text-grey-500"> 
//           {formatDateTime(event.startDateTime).dateTime}
//         </p>

//         <Link href={`/events/${event._id}`}>
//           <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
//         </Link>

//         <div className="flex-between w-full">
//           <p className="p-medium-14 md:p-medium-16 text-grey-600">
//             {event.organizer.firstName} {event.organizer.lastName}
//           </p>

//           {hasOrderLink && (
//             <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
//               <p className="text-primary-500">Order Details</p>
//               <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card


import { jsPDF } from 'jspdf'; // Import jsPDF


// type CardProps = {
//   event: IEvent,
//   hasOrderLink?: boolean,
//   hidePrice?: boolean
// }

// const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer._id.toString();

//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text(event.title, 10, 10);
//     doc.setFontSize(12);
//     doc.text(`Description: ${event.description}`, 10, 20);
//     doc.text(`Start Date: ${formatDateTime(event.startDateTime).dateTime}`, 10, 30);
//     doc.text(`End Date: ${formatDateTime(event.endDateTime).dateTime}`, 10, 40);
//     doc.text(`Organizer: ${event.organizer.firstName} ${event.organizer.lastName}`, 10, 50);
    
//     doc.save('ticket.pdf'); // Save the PDF with a name
//   }

//   return (
//     <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
//       <Link 
//         href={`/events/${event._id}`}
//         style={{backgroundImage: `url(${event.imageUrl})`}}
//         className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
//       />
//       {/* IS EVENT CREATOR ... */}

//       {isEventCreator && !hidePrice && (
//         <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
//           <Link href={`/events/${event._id}/update`}>
//             <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
//           </Link>

//           <DeleteConfirmation eventId={event._id} />
//         </div>
//       )}

//       <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"> 
//         {!hidePrice ? (
//           <div className="flex gap-2">
//             <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
//               {event.isFree ? 'FREE' : `$${event.price}`}
//             </span>
//             <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
//               {event.category.name}
//             </p>
//           </div>
//         ) : (
//           <Button size="lg" className="button sm:w-fit" onClick={generatePDF}>
//             Download Ticket
//           </Button>

//         )}

//         <p className="p-medium-16 p-medium-18 text-grey-500"> 
//           {formatDateTime(event.startDateTime).dateTime}
//         </p>

//         <Link href={`/events/${event._id}`}>
//           <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
//         </Link>

//         <div className="flex-between w-full">
//           <p className="p-medium-14 md:p-medium-16 text-grey-600">
//             {event.organizer.firstName} {event.organizer.lastName}
//           </p>

//           {hasOrderLink && (
//             <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
//               <p className="text-primary-500">Order Details</p>
//               <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;

// Card.tsx

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer._id.toString();

  return (
    <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
      <Link 
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
      />
      
      {isEventCreator && !hidePrice && (
        <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-orange-200 p-3 shadow-sm transition-all">
          <Link href={`/events/${event._id}/update`}>
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      <div className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"> 
        {!hidePrice ? (
          <div className="flex gap-2">
            <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
              {event.isFree ? 'FREE' : `$${event.price}`}
            </span>
            <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
              {event.category.name}
            </p>
          </div>
        ) : (
          <DownloadTicket event={event} /> // Utiliser le nouveau composant ici
        )}

        <p className="p-medium-16 p-medium-18 text-grey-500"> 
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        <Link href={`/events/${event._id}`}>
          <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
        </Link>

        <div className="flex-between w-full">
          <p className="p-medium-14 md:p-medium-16 text-grey-600">
            {event.organizer.firstName} {event.organizer.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`}   className="flex items-center gap-2 bg-orange-200 text-white font-semibold py-2 px-4 rounded-full hover:bg-orange-300 transition duration-200 border-2 border-orange-300 ">
              <p className="text-black">Order Details</p>
              <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;

