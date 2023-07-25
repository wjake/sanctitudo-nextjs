'use client'

import { cn } from '@/lib/utils'
import { FC, useState } from 'react'
import { signIn } from 'next-auth/react'
import { Button } from '../ui/button'
import { Icons } from '../icons'
import { useToast } from '../ui/use-toast'
import { Loader2 } from 'lucide-react'
import { useSearchParams } from 'next/navigation'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const UserAuthForm: FC<UserAuthFormProps> = ({ className, ...props }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const searchParams = useSearchParams()
  const { toast } = useToast()

  const errorParam = searchParams.get('error')

  if (errorParam && !isError) {
    toast({
      title: 'An error has occured.',
      description: errorParam,
      variant: 'destructive',
    })
    setIsError(true)
  }

  const loginWithDiscord = async () => {
    setIsLoading(true)

    try {
      await signIn('discord')
    } catch (e) {
      toast({
        title: 'There was a problem.',
        description: 'There was a problem signing in with Discord.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn('flex justify-center', className)} {...props}>
      <Button onClick={loginWithDiscord} size='sm' className='w-full'>
        {isLoading ? (
          <Loader2 className='mr-2 h-4 w-4 animate-spin' />
        ) : (
          <Icons.discord className='mr-2 h-4 w-4' />
        )}
        Discord
      </Button>
    </div>
  )
}

export default UserAuthForm
