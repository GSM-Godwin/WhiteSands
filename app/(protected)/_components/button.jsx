'use client';

import React from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Button = ({ selector }) => {
  const downloadPDF = () => {
    const capture = document.querySelector(selector);
    html2canvas(capture, { scale: 2 }).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a5');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('receipt.pdf');
    });
  };

  return (
    <button onClick={() => window.print()} className='border-2 border-gray-500 p-3 rounded-lg mt-5 print:hidden'>
      Download PDF
    </button>
  );
};

export default Button;
