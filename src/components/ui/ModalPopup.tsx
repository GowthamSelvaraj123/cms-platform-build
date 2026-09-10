"use client";
import React, { useState } from 'react';
import Link from 'next/link';

export default function ModalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-16 bg-gray-100 flex justify-center">
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-gray-900 text-white px-6 py-3 rounded-md hover:bg-gray-800 transition font-medium"
      >
        Open Modal
      </button>

      {isOpen && (
        <div className="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
            onClick={() => setIsOpen(false)}
          ></div>
          
          {/* Modal Panel */}
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto pointer-events-none">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 pointer-events-auto">
              <div className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <h3 className="text-base font-semibold leading-6 text-gray-900" id="modal-title">ModalPopup Title</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">This is a placeholder for a modal or popup dialog. In production, this would be hidden until toggled by state.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button 
                    type="button" 
                    onClick={() => setIsOpen(false)}
                    className="inline-flex w-full justify-center rounded-md bg-gray-900 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 sm:ml-3 sm:w-auto"
                  >
                    Confirm
                  </button>
                  <button 
                    type="button" 
                    onClick={() => setIsOpen(false)}
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}