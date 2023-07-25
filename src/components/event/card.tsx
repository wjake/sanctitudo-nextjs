import { Event } from 'raid-helper'
import {
  format,
  formatDistanceToNow,
  formatDistanceToNowStrict,
  formatDuration,
} from 'date-fns'
import { useRouter } from 'next/navigation'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { Button } from '../ui/button'
import { Table, TableBody, TableCell, TableRow } from '../ui/table'
import { useSession } from 'next-auth/react'
import { Separator } from '../ui/separator'

export default function EventCard({ event }: { event: Event }) {
  const { push } = useRouter()
  const { data, status } = useSession()
  return (
    <Card onClick={(e) => push(`/events/${event.id}`)}>
      <CardHeader>
        <CardTitle className='line-clamp-1 overflow-hidden text-ellipsis text-lg md:text-2xl'>
          {event.title}
        </CardTitle>
        <CardDescription>
          #{event.channelName} @{event.advancedSettings.mentions}
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <p>{event.signUps.length} / 8</p>
        <p>{format(event.startTime * 1000, 'do MMMM yyyy - HH:mm O')}</p>
        <p>
          Starting{' '}
          {formatDistanceToNow(event.startTime * 1000, {
            addSuffix: true,
          })}{' '}
          for{' '}
          {formatDuration({
            hours: event.advancedSettings.duration / 60,
          })}
        </p>
        <Separator />
        <br />
        <Table>
          <TableBody>
            {event.signUps
              .sort((a, b) => {
                return a.position - b.position
              })
              .map((signup) => {
                return (
                  <TableRow key={signup.id}>
                    <TableCell className='hidden p-1 md:block'>
                      {signup.position}
                    </TableCell>
                    <TableCell className='p-0'>
                      {data?.user?.discord.valueOf() ===
                      signup.userId.valueOf() ? (
                        <>{signup.name} (Me)</>
                      ) : (
                        <>{signup.name}</>
                      )}
                    </TableCell>
                    <TableCell className='p-0'>
                      {signup.className.valueOf() == 'Tentative' ||
                      signup.className.valueOf() == 'Late' ||
                      signup.className.valueOf() == 'Bench' ? (
                        <img
                          src={`https://cdn.discordapp.com/emojis/${signup.classEmoteId}.png`}
                          className='h-4 object-scale-down'
                        />
                      ) : (
                        <div></div>
                      )}
                    </TableCell>
                    <TableCell className='justify-items-end p-1 text-end'>
                      <img
                        src={
                          signup.specEmoteId
                            ? `https://cdn.discordapp.com/emojis/${signup.specEmoteId}.png`
                            : `https://cdn.discordapp.com/emojis/${signup.classEmoteId}.png`
                        }
                        className='h-5 object-scale-down'
                        alt=''
                      />
                    </TableCell>
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <Button variant='outline' disabled>
          Edit
        </Button>
        <Button disabled>Join</Button>
      </CardFooter>
    </Card>
  )
}
