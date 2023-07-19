'use client'

import { X } from 'lucide-react'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'

export default function CloseModal() {
  const router = useRouter()
  return (
    <Button
      variant='outline'
      className='h-6 w-6 rounded-md p-0'
      aria-label='Close modal'
      onClick={() => router.back()}>
      <X className='h-4 w-4' />
    </Button>
  )
}
