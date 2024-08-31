import { auth } from '@/auth'
import { db } from '@/lib/db'
import React from 'react'

interface Props {
    params: {
        storeId: string
    }
}
async function page({params}: Props) {
    const userId = await auth()
    const store =await db.store.findFirst({
        where: {
            id: params.storeId
        }
    })
  return (
    <div>
        store Id is : {params.storeId} 
        store name is : {store?.name}
        <div>
        userId :{userId?.user.id}

        </div>
        

        <h1 className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-blue-500'>
        pageerfrr

        </h1>
        <h1>
            pagte
        </h1>
        </div>
  )
}

export default page