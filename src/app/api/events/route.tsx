import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const res = await fetch(
    `https://raid-helper.dev/api/v3/servers/${process.env.DISCORD_GUILD}/events`,
    {
      headers: {
        Authorization: process.env.RAID_HELPER_KEY!,
        StartTimeFilter: String(Math.floor(new Date().getTime() / 1000)),
      },
    }
  )

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return NextResponse.json(await res.json())
}
