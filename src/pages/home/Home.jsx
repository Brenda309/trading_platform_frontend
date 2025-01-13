import React from 'react'
import { Button } from "@/components/ui/button"
import AssetTable from './AssetTable'
import StockChart from './StockChart'
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
import { DotIcon, MessageCircle } from 'lucide-react'
import { Cross1Icon } from '@radix-ui/react-icons'

const Home = () => {

  const [category, setCategory] = React.useState("all")
  const handleCategory = (value) => {
    setCategory(value);
  }

  return (
    <div className='relative'>
      <div className='lg:flex'>
        <div className='lg:w-[50%] lg:border-r'>
          <div className='p-3 flex items-center gap-4'>
            <Button
              onClick={() => handleCategory("all")}
              variant={category == "all" ? "default" : "outline"}
              className="rounded-full">
              All
            </Button>

            <Button
              onClick={() => handleCategory("top50")}
              variant={category == "top50" ? "default" : "outline"}
              className="rounded-full">
              Top 50
            </Button>

            <Button
              onClick={() => handleCategory("topGainers")}
              variant={category == "topGainers" ? "default" : "outline"}
              className="rounded-full">
              Top Gainers
            </Button>

            <Button
              onClick={() => handleCategory("topLosers")}
              variant={category == "topLosers" ? "default" : "outline"}
              className="rounded-full">
              Top Losers
            </Button>
          </div>
          <AssetTable />
        </div>

        <div className='hidden lg:block lg:w-[50%] p-5'>
          <StockChart />

          {/* Avatar Section */}
          <div className='flex gap-5 items-center mt-5'>
            <div className="w-10 h-10 rounded-full overflow-hidden">
              {/* Added styling for image */}
              <Avatar className="w-full h-full">
                <AvatarImage
                  className="object-cover w-full h-full"
                  src={
                    'https://cdn5.vectorstock.com/i/1000x1000/91/39/gold-cryptocurrency-coin-ethereum-eth-icon-vector-34259139.jpg'
                  }
                />
              </Avatar>
            </div>
            <div className='flex items-center gap-2'>
              <p>ETH </p>
              <DotIcon className='text-gray-400' />
              <p className='text-gray-400'>Ethereum</p>
            </div>
            <div className='flex items-end gap-2'>
              <p className='text-xl font-bold'>5464</p>
              <p className='text-red-600'>
                <span>-1319049822.578</span>
                <span>(-0.29803%)</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="absolute bottom-5 right-5 z-50 flex flex-col justify-end items-end gap-2">
  <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900 p-4">
    <div className="flex justify-between items-center border-b px-6 h-[12%]">
      <p className="text-white">Chat Bot</p>
      <Button variant="ghost" size="icon">
        <Cross1Icon className="text-white" />
      </Button>
    </div>
  </div>

  <div className="relative w-[10rem] cursor-pointer group">
    <Button className="w-full h-[3rem] gap-2 items-center">
      <MessageCircle 
        size={30}
        className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]" />
      <span className="text-2xl">Chat Bot</span>
    </Button>
  </div>

  
</section>
    </div>
  )
}

export default Home