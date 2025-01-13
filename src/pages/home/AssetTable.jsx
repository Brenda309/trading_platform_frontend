import React from 'react'
import { Table,TableBody,

    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Avatar, AvatarImage } from '@radix-ui/react-avatar'
  

const AssetTable = () => {
  return (
    <div>
      <Table>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Coin</TableHead>
      <TableHead>Symbol</TableHead>
      <TableHead>Volume</TableHead>
      <TableHead>Market CAP</TableHead>
      <TableHead>24H</TableHead>
      <TableHead className="text-right">Price</TableHead>
    </TableRow>
  </TableHeader>

  <TableBody>
    <TableRow>
      <TableCell className="font-medium flex items-center gap-2">
<Avatar className='-z-50'>
    <AvatarImage src='https://cdn.vectorstock.com/i/1000v/37/03/bitcoin-icon-payment-symbol-cryptocurrency-logo-vector-40853703.jpg'/>
</Avatar>
<span>Bitcoin</span>
      </TableCell>


      <TableCell>BTC</TableCell>
      <TableCell>41547718415</TableCell>
      <TableCell>1873055896306</TableCell>
      <TableCell>0.84121</TableCell>
      <TableCell>94457</TableCell>

    </TableRow>
  </TableBody>


  <TableBody>
    {[1,1,1,1,1,1,1,1,1,1].map((item,index)=> <TableRow key={index}>
      <TableCell className="font-medium flex items-center gap-2">
<Avatar className='-z-50'>
    <AvatarImage src='https://cdn.vectorstock.com/i/1000v/37/03/bitcoin-icon-payment-symbol-cryptocurrency-logo-vector-40853703.jpg'/>
</Avatar>
<span>Bitcoin</span>
      </TableCell>


      <TableCell>BTC</TableCell>
      <TableCell>41547718415</TableCell>
      <TableCell>1873055896306</TableCell>
      <TableCell>0.84121</TableCell>
      <TableCell>94457</TableCell>

    </TableRow>)}
  </TableBody>

</Table>

    </div>
  )
}

export default AssetTable
