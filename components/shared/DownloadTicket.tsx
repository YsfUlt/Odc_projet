// // components/DownloadTicket.tsx
// 'use client';
// import { jsPDF } from 'jspdf';
// import { IEvent } from '@/lib/database/models/event.model';
// import React from 'react';
// import { Button } from '../ui/button';

// type DownloadTicketProps = {
//   event: IEvent;
// };

// const DownloadTicket: React.FC<DownloadTicketProps> = ({ event }) => {
//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.text(event.title, 10, 10);
//     doc.setFontSize(12);
//     doc.text(`Description: ${event.description}`, 10, 20);
//     doc.text(`Start Date: ${event.startDateTime}`, 10, 30); // Format si nécessaire
//     doc.text(`End Date: ${event.endDateTime}`, 10, 40); // Format si nécessaire
//     doc.text(`Organizer: ${event.organizer.firstName} ${event.organizer.lastName}`, 10, 50);
    
//     doc.save('ticket.pdf'); // Sauvegarder le PDF avec un nom
//   };

//   return (
//     <Button size="lg" className="button sm:w-fit" onClick={generatePDF}>
//       Download Ticket
//     </Button>
//   );
// }

// export default DownloadTicket;


// 'use client';
// import { jsPDF } from 'jspdf';
// import { IEvent } from '@/lib/database/models/event.model';
// import React from 'react';
// import { Button } from '../ui/button';

// let ticketNumber = 1; // Initialise le numéro de ticket

// const DownloadTicket: React.FC<{ event: IEvent }> = ({ event }) => {
//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();
//     doc.setFontSize(16);
//     doc.setFont("helvetica", "bold");
//     doc.text("Event Ticket", 15, 15);
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");

//     // Ajouter un numéro de ticket
//     doc.text(`Ticket Number: ${ticketNumber}`, 15, 30);
//     ticketNumber++; // Incrémente le numéro de ticket pour le prochain

//     // Détails de l'événement
//     doc.setFontSize(14);
//     doc.text("Event Details", 15, 50);
//     doc.setFontSize(12);
//     doc.text(`Title: ${event.title}`, 15, 60);
//     doc.text(`Description: ${event.description}`, 15, 70);
//     doc.text(`Start Date: ${event.startDateTime}`, 15, 80); // Format si nécessaire
//     doc.text(`End Date: ${event.endDateTime}`, 15, 90); // Format si nécessaire
//     doc.text(`Organizer: ${event.organizer.firstName} ${event.organizer.lastName}`, 15, 100);

//     // Ajout d'une ligne horizontale
//     doc.line(10, 110, 200, 110); // Ligne horizontale

//     // Informations supplémentaires
//     doc.setFontSize(10);
//     doc.text("Thank you for attending!", 15, 120);
//     doc.text("Please keep this ticket safe.", 15, 130);
    
//     // Sauvegarder le PDF avec un nom
//     doc.save(`ticket-${ticketNumber - 1}.pdf`); // Utilise le numéro de ticket pour le nom de fichier
//   };

//   return (
// <Button 
//   className="bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-full sm:w-fit transition duration-300 border-2 border-orange-300" 
//   onClick={generatePDF}
// >
//   Download Ticket
// </Button>

//   );
// }

// export default DownloadTicket;


// 'use client';
// import { jsPDF } from 'jspdf';
// import { IEvent } from '@/lib/database/models/event.model';
// import React from 'react';
// import { Button } from '../ui/button';

// let ticketNumber = 1; // Initialise le numéro de ticket

// const DownloadTicket: React.FC<{ event: IEvent }> = ({ event }) => {
//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Couleur et styles
//     const orangeColor = "#FF8C00";
//     const blackColor = "#000000";

//     // Titre de l'événement (centré et en gras)
//     doc.setTextColor(blackColor);
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(22);
//     doc.text(event.title, doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });

//     // Description (encadrée avec une bordure orange)
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
//     doc.setDrawColor(orangeColor); // Bordure orange
//     doc.rect(15, 30, 180, 30); // Rectangle pour la description
//     doc.text(`Description: ${event.description}`, 20, 40);

//     // Dates de l'événement
//     doc.setFontSize(14);
//     doc.text(`Start Date: ${event.startDateTime}`, 20, 80);
//     doc.text(`End Date: ${event.endDateTime}`, 20, 90);

//     // Numéro de ticket (affiché joliment en bas à droite)
//     doc.setFontSize(14);
//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(orangeColor);
//     doc.text(`Ticket #${ticketNumber}`, 170, 120);
//     ticketNumber++; // Incrémente le numéro pour le prochain ticket

//     // Ligne horizontale de séparation
//     doc.setDrawColor(blackColor);
//     doc.line(10, 130, 200, 130);

//     // Organisateur et signature (en bas à gauche avec une place pour le cachet/signature)
//     doc.setTextColor(blackColor);
//     doc.setFontSize(12);
//     doc.text(`Organizer: ${event.organizer.firstName} ${event.organizer.lastName}`, 20, 150);

//     // Placeholder pour signature ou cachet
//     doc.setDrawColor(orangeColor);
//     doc.rect(150, 140, 40, 20); // Cadre pour la signature ou cachet
//     doc.text("Signature/Stamp", 160, 155); // Texte dans le cadre

//     // Sauvegarder le PDF avec le numéro de ticket
//     doc.save(`ticket-${ticketNumber - 1}.pdf`);
//   };

//   return (
//     <Button
//       className="bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-full sm:w-fit transition duration-300 border-2 border-orange-300"
//       onClick={generatePDF}
//     >
//       Download Ticket
//     </Button>
//   );
// }

// export default DownloadTicket;

// 'use client';
// import { jsPDF } from 'jspdf';
// import { IEvent } from '@/lib/database/models/event.model';
// import React from 'react';
// import { Button } from '../ui/button';

// // Fonction pour formater une date en français, sans les secondes
// const formatDate = (date: Date) => {
//   return date.toLocaleString('fr-FR', {
//     weekday: 'long', // Jour de la semaine
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
//   });
// };

// let ticketNumber = 1; // Initialise le numéro de ticket

// const DownloadTicket: React.FC<{ event: IEvent }> = ({ event }) => {
//   // Function to generate PDF
//   const generatePDF = () => {
//     const doc = new jsPDF();

//     // Couleur et styles
//     const orangeColor = "#FF8C00";
//     const blackColor = "#000000";

//     // Titre de l'événement (centré et en gras)
//     doc.setTextColor(blackColor);
//     doc.setFont("helvetica", "bold");
//     doc.setFontSize(22);
//     doc.text(event.title, doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });

//     // Description (encadrée avec une bordure orange)
//     doc.setFontSize(12);
//     doc.setFont("helvetica", "normal");
//     doc.setDrawColor(orangeColor); // Bordure orange
//     doc.rect(15, 30, 180, 30); // Rectangle pour la description
//     doc.text(`Description: ${event.description || "Aucune description disponible"}`, 20, 40);

//     // Tableau pour les dates de début et fin
//     doc.setFontSize(14);
//     doc.setTextColor(blackColor);

//     // Dessiner le tableau
//     const startX = 20;
//     const startY = 80;
//     const cellHeight = 10;
//     const cellWidth = 80;

//     doc.text("Date de début", startX, startY);
//     doc.text("Date de fin", startX + cellWidth, startY);

//     // Afficher les dates dans le tableau
//     doc.setFontSize(12);
//     doc.text(formatDate(new Date(event.startDateTime)), startX, startY + cellHeight);
//     doc.text(formatDate(new Date(event.endDateTime)), startX + cellWidth, startY + cellHeight);

//     // Numéro de ticket (affiché joliment en bas à droite)
//     doc.setFontSize(14);
//     doc.setFont("helvetica", "bold");
//     doc.setTextColor(orangeColor);
//     doc.text(`Ticket #${ticketNumber}`, 170, 120);
//     ticketNumber++; // Incrémente le numéro pour le prochain ticket

//     // Ligne horizontale de séparation
//     doc.setDrawColor(blackColor);
//     doc.line(10, 130, 200, 130);

//     // Organisateur et signature (en bas à gauche avec une place pour le cachet/signature)
//     doc.setTextColor(blackColor);
//     doc.setFontSize(12);
//     doc.text(`Organisateur: ${event.organizer.firstName} ${event.organizer.lastName}`, 20, 150);

//     // Placeholder pour signature ou cachet
//     doc.setDrawColor(orangeColor);
//     doc.rect(150, 140, 40, 20); // Cadre pour la signature ou cachet
//     doc.text("Cachet", 160, 155); // Texte dans le cadre

//     // Sauvegarder le PDF avec le numéro de ticket
//     doc.save(`Ticket-${ticketNumber - 1}.pdf`);
//   };

//   return (
//     <Button
//       className="bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-full sm:w-fit transition duration-300 border-2 border-orange-300"
//       onClick={generatePDF}
//     >
//       Download Ticket
//     </Button>
//   );
// }

// export default DownloadTicket;

'use client';
import { jsPDF } from 'jspdf';
import { IEvent } from '@/lib/database/models/event.model';
import React from 'react';
import { Button } from '../ui/button';

// Fonction pour formater une date en français, sans les secondes
const formatDate = (date: Date) => {
  return date.toLocaleString('fr-FR', {
    weekday: 'long', // Jour de la semaine
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

let ticketNumber = 1; // Initialise le numéro de ticket

const DownloadTicket: React.FC<{ event: IEvent }> = ({ event }) => {
  // Function to generate PDF
  const generatePDF = () => {
    const doc = new jsPDF();

    // Couleur et styles
    const orangeColor = "#FF8C00";
    const blackColor = "#000000";

    // Titre de l'événement (centré et en gras)
    doc.setTextColor(blackColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.text(event.title, doc.internal.pageSize.getWidth() / 2, 20, { align: "center" });

    // Description (encadrée avec une bordure orange)
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.setDrawColor(orangeColor); // Bordure orange
    const descHeight = 40; // Ajustez cette valeur si nécessaire
    const descY = 30;
    doc.rect(15, descY, 180, descHeight); // Rectangle pour la description
    const descriptionText = `Description: ${event.description || "Aucune description disponible"}`;
    
    // Ajouter le texte description avec gestion du retour à la ligne
    doc.text(descriptionText, 20, descY + 10, { maxWidth: 170 });

    // Dates de l'événement
    doc.setFontSize(14);
    doc.setTextColor(blackColor);
    const startY = descY + descHeight + 10; // Positionner les dates sous la description
    doc.text(`Start Date: ${formatDate(new Date(event.startDateTime))}`, 20, startY);
    doc.text(`End Date: ${formatDate(new Date(event.endDateTime))}`, 20, startY + 10);

    // Numéro de ticket (affiché joliment en bas à droite)
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(orangeColor);
    doc.text(`Ticket #${ticketNumber}`, 170, startY + 30); // Ajustez la position si nécessaire
    // ticketNumber++; // Incrémente le numéro pour le prochain ticket

    // Ligne horizontale de séparation
    doc.setDrawColor(blackColor);
    doc.line(10, startY + 40, 200, startY + 40); // Ajustez la position si nécessaire

    // Organisateur et signature (en bas à gauche avec une place pour le cachet/signature)
    doc.setTextColor(blackColor);
    doc.setFontSize(12);
    doc.text(`Organisateur: ${event.organizer.firstName} ${event.organizer.lastName}`, 20, startY + 50);

    // Placeholder pour signature ou cachet
    doc.setDrawColor(orangeColor);
    doc.rect(150, startY + 40, 40, 20); // Cadre pour la signature ou cachet
    doc.text("Cachet", 160, startY + 55); // Texte dans le cadre

    // Sauvegarder le PDF avec le numéro de ticket
    doc.save(`Ticket-${ticketNumber - 1}.pdf`);
  };

  return (
    <Button
      className="bg-orange-200 hover:bg-orange-300 text-black font-bold py-2 px-4 rounded-full sm:w-fit transition duration-300 border-2 border-orange-300"
      onClick={generatePDF}
    >
      Download Ticket
    </Button>
  );
}

export default DownloadTicket;
