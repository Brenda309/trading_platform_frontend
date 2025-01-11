import React from 'react'
import { Button } from "@/components/ui/button"
import {DragHandleHorizontalIcon, MagnifyingGlassIcon} from "@radix-ui/react-icons"
import Sidebar from './Sidebar'

import {
    Sheet,SheetContent,SheetDescription,SheetHeader,SheetTitle, SheetTrigger,
  } from "@/components/ui/sheet"
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'


const Navbar = () => {
  return (
    <div className='px-2 py-3 border-b z-50 bg-background bg-opacity-0 sticky
    top-0 left-0 right-0 flex justify-between items-center'>
      
<div className='flex items-center gap-3'>
<Sheet>
  <SheetTrigger>
    <Button varient='ghost' size='icon' className='rounded-full h-11 w-11'>
    <DragHandleHorizontalIcon className='h-7 w-7'/>
        </Button>
  </SheetTrigger>

  <SheetContent className = "w-72 border-r-0 flex flex-col" side= "left">
    <SheetHeader>
      <SheetTitle>
   <div className="text-3xl flex justify-center items-center gap-1">
<Avatar>
    <AvatarImage src="https://cdn-icons-png.flaticon.com/512/9041/9041216.png"/>
</Avatar>

<div>
    <span className='font-bold text-blue-700'>Trading</span>
    <span>Platform</span>
</div>
    </div>
        </SheetTitle>
    
    </SheetHeader>
    <Sidebar/>
  </SheetContent>
</Sheet>

<p className='text-sm lg:text-base cursor-pointer'>Trading Platfrom</p>

<div className='p-0 ml-9'>
<Button varient="outline" 
className="flex items-center gap-3">
<MagnifyingGlassIcon/>
<span>Search</span>
</Button>
</div>
</div>
<div>
<Avatar>
    <AvatarFallback>
        B
    </AvatarFallback>
</Avatar>

</div>

    </div>
  )
}

export default Navbar
