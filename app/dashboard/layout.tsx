"use client"
import React, { useState } from 'react'
import SideNav from './_components/SideNav';
import Header from './_components/Header';
import { TotalUsageContext } from '../(context)/TotalUsageContext';
import { UserSubscriptionContext } from '../(context)/UserSubscriptionContext';
import { UpdateCreditUsageContext } from '../(context)/UpdateCreditUsageContext';

function layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {

    const [totalUsage,setTotalUsage]=useState<Number>(0);
    const [userSubscription,setUserSubscription]=useState<boolean>(false);
    const [updateCreditUsage,setUpdateCreditUsage]=useState<any>()

  return (
    <TotalUsageContext.Provider value={{totalUsage,setTotalUsage}}>
      <UserSubscriptionContext.Provider value={{userSubscription,setUserSubscription}}>
        <UpdateCreditUsageContext.Provider value={{updateCreditUsage,setUpdateCreditUsage}}>
    <div className='bg-slate-100 min-h-screen'>
        <div className='md:w-64 hidden md:block fixed'>
            <SideNav/>
        </div>
        <div className='md:ml-64'>
          <Header/>
        {children}
        </div>
      <div>
      <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="tubegurujiw" data-description="Support me on Buy me a coffee!" data-message="You can buy me coffee , If you like this app" data-color="#BD5FFF" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </div>
    </div>
    </UpdateCreditUsageContext.Provider>
    </UserSubscriptionContext.Provider>
    </TotalUsageContext.Provider>
  )
}

export default layout