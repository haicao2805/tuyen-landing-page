import { ClosePopupSvg } from '@/components/svg';
import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image';
import React, { Fragment } from 'react'

export default function Popup({ isOpen, setIsOpen, selectedImg }: { selectedImg: string; isOpen: boolean; setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-[60]" onClose={() => setIsOpen(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-[#EEEEEE] bg-opacity-75" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="flex items-center justify-center gap-x-[80px] w-fit transform overflow-hidden transition-all">
                <Image
                  className="w-[420px] h-auto"
                  src={selectedImg} width={230} height={324.98} alt="" />
                <div className='w-fit h-fit relative'>
                  <div className='absolute inset-0 px-[40px] flex items-center justify-center flex-col text-left'>
                    <p className='w-full text-[26px] leading-[32px] text-[#121212] font-philosopher font-bold'>Artist Name</p>
                    <p className='text-[16px] leading-[32px] text-[#121212] font-montserrat font-normal'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet</p>
                  </div>
                  <button onClick={() => setIsOpen(false)} className='absolute right-[16px] top-[26px] outline-none focus:bg-none'>
                    <ClosePopupSvg />
                  </button>
                  <Image src="/images/popup-bg.png" width={521} height={272} alt='' />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}
