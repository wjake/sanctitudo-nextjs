import Events from '@/components/Events'
import { Event } from 'raid-helper'

export default function Page() {
  return (
    <main>
      <div className='grid min-w-full gap-4 md:grid-cols-2 md:justify-between lg:grid-cols-3'>
        <Events />
      </div>
    </main>
  )
}
