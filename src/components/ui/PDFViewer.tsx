import React from 'react';
import Link from 'next/link';

export default function PDFViewer() {
  return (

    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-[800px] flex flex-col">
          <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex justify-between items-center">
            <span className="font-medium text-gray-700">Document_Viewer.pdf</span>
            <button className="text-sm bg-gray-900 text-white px-3 py-1 rounded">Download PDF</button>
          </div>
          <div className="flex-1 bg-gray-300 flex items-center justify-center">
             <div className="w-3/4 h-5/6 bg-white shadow-2xl p-12 text-center text-gray-400 border border-gray-200">PDF Document Page Render</div>
          </div>
        </div>
      </div>
    </section>
  );
}