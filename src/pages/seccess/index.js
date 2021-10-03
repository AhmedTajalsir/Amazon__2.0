import { CheckCircleIcon } from "@heroicons/react/outline"
import Header from "../../components/Header"
import {useRouter} from 'next/router'
function index() {
    const router = useRouter()
    return (
        <div className='bg-gray-100 h-screen'>
            <Header />
            <main className='max-w-screen-lg mx-auto'>
                <div className='flex flex-col p-10 bg-white'>
                    <div className='flex items-center space-x-2 mb-5'>
                        <CheckCircleIcon className='text-green-500 h-10'/>
                        <h1 className='text-3xl'>
                            Thank you, your order has been confirmed!
                        </h1>
                    </div>

                    <div>
                        <p>
                            Thank you for shopping with us. we'll send a confirmation once your item has shipping,  if you would like to check the status of your order(s) please press the link below.
                        </p>
                        <button className='button mt-8' onClick={()=>router.push('/orders')}>Go to My Order</button>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default index
