import BankCard from '@/components/ui/BankCard';
import HeaderBox from '@/components/ui/HeaderBox'
import { getAccounts } from '@/lib/actions/bank.actions';
import { getLoggedInUser } from '@/lib/actions/user.actions';
import React from 'react'

const Mybanks = async() => {

  const loggedIn = await getLoggedInUser();
  const accounts = await getAccounts({ 
    userId: loggedIn.$id 
  })

  return (
    <section className='flex'> 
      <div className='my-banks'>
        <HeaderBox title = "My Bank Account" subtext='Effortlessly manage your banking activities' />

        <div className='space-y-4'>
          <h2 className='header-2'>
            Your Cards
          </h2>

          <div className='flex flex-wrap gap-6'>
            {accounts && accounts.data.map((a: Account) => (
              <BankCard account = {a} key = {accounts.id} userName = {loggedIn?.firstName}/>
            ))}
          </div>
        </div>

        

      </div>
    </section>
  )
}

export default Mybanks
