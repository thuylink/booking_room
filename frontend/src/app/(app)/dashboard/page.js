
import React from 'react';

import { Button } from '@nextui-org/button'
import { Card, CardBody } from '@nextui-org/card'
import Image from 'next/image'
import shoe from '../../../../../backend/public/uploads/category/1709800630.png'
import './style_dashboard.scss'

const Dashboard = () => {
        // const [searchTerm, setSearchTerm] = useState('');
      
        // const handleSearchChange = (event) => {
        //   setSearchTerm(event.target.value);
        // };
      
        // const handleSubmit = (event) => {
        //   event.preventDefault();
        //   // Xử lý logic tìm kiếm ở đây, ví dụ:
        //   console.log('Đã submit với giá trị tìm kiếm:', searchTerm);
    return (
        <>
        
        <section className='py-36'>
          <div className='container flex items-center justify-center'>
            <Card className='py-4 lg:w-3/4 xl:w-1/2'>
              <CardBody className='overflow-visible py-2'>
                <div className='flex gap-6'>
                <Image alt='Shoe' className='flex-1 object-cover' src={shoe} style={{ width: '200px', height: '200px' }} />                  <div className='flex-1'>
                    <h2 className='text-lg font-bold uppercase'>
                      Địa chỉ ở đây
                    </h2>
                    <p className='text-sm text-default-500'>
                      Sao đánh giá ở đây
                    </p>
    
                    <div className='mb-6 mt-2 flex gap-3'>
                      <span className='text-success'>Chi phí ở đây</span>
                    </div>
    
    
                    <div className='mt-6 flex gap-6'>
                      <Button color='primary'>Xem chi tiết</Button>
                      <Button color='primary' variant='bordered' radius='full'>
                        Thêm vào yêu thích 
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
        </>
        
      )

    // return (
    //     <div className="py-12">
    //         <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    //             <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
    //                 <div className="p-6 bg-white border-b border-gray-200">
    //                     Đã đăng nhập vào trang dành cho khá ừbvfwwvch thuê nhà!
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
        
    // )
}

export default Dashboard
