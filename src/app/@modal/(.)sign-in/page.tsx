import CloseModal from '@/components/CloseModal'
import SignIn from '@/components/auth/sign-in'
import { Card, CardContent } from '@/components/ui/card'

export default function Default() {
  return (
    <div className='fixed inset-0 z-10 bg-zinc-900/20 backdrop-blur-sm'>
      <div className='mx-auto flex h-full max-w-lg items-center'>
        <div className='container relative h-fit w-full py-20'>
          <div className='absolute right-4 top-4'>
            <CloseModal />
          </div>

          <Card className='py-6'>
            <SignIn />
          </Card>
        </div>
      </div>
    </div>
  )
}
