"use client"

import { StoreModal } from '@/components/modals/store-modal'
import { Modal } from '@/components/ui/modal'
import { useStoreModal } from '@/hooks/use-storeModal'
import { Modak } from 'next/font/google'
import React, { useEffect } from 'react'

const  DashboardPage =()=> {
  const onOpen =useStoreModal((state)=>state.onOpen)
  const isOpen =useStoreModal((state)=>state.isOpen)
  useEffect(()=>{
    if(!isOpen){
      onOpen()
    }
  },[isOpen,onOpen])
  
  return (

    <div>DashboardPage
    </div>
  )
}

export default DashboardPage