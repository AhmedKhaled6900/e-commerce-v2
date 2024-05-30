import React from 'react'

interface Props {
    params: {
        storeId: string
    }
}
function page({params}: Props) {
  return (
    <div>
        store Id is : {params.storeId}
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