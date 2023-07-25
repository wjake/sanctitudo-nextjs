declare module 'raid-helper' {
  interface Server {
    pages: number
    eventsOverall: number
    eventsTransmitted: number
    currentPage: number
    postedEvents: EventItem[]
  }

  interface EventItem {
    id: string
    lastUpdated: number
    color: string
    leaderName: string
    imageUrl?: string | null
    closeTime: number
    description: string
    startTime: number
    endTime: number
    title: string
    templateId: string
    channelId: string
    leaderId: string
  }

  interface Event {
    id: string
    serverId: string
    leaderId: string
    leaderName: string
    channelId: string
    channelName: string
    channelType: string
    templateId: string
    templateEmoteId: string
    title: string
    description: string
    startTime: number
    endTime: number
    closingTime: number
    date: string
    time: string
    advancedSettings: {
      duration: number
      deadline: number
      limit: number
      lock_at_limit: boolean
      limit_per_user: number
      allow_duplicate: boolean
      horizontal_mode: boolean
      bench_overflow: boolean
      queue_bench: boolean
      vacuum: boolean
      force_reminders: boolean | number
      pin_message: boolean
      deletion: boolean | number
      mention_mode: boolean
      preserve_order: string
      apply_unregister: boolean
      apply_specreset: string
      spec_saving: boolean
      font_style: number
      alt_names: boolean
      defaults_pre_req: boolean
      show_on_overview: boolean
      mention_leader: boolean
      attendance: boolean | string
      show_title: boolean
      show_info: boolean
      show_leader: boolean
      show_counter: boolean
      show_roles: boolean
      show_content: boolean
      show_classes: boolean
      show_emotes: boolean
      show_numbering: boolean
      show_allowed: boolean
      show_footer: boolean
      info_variant: string
      date_variant: string
      show_countdown: boolean
      disable_archiving: boolean
      bold_all: boolean
      bench_emote: string
      late_emote: string
      tentative_emote: string
      absence_emote: string
      leader_emote: string
      event_type: string
      reminder: boolean | number
      create_discordevent: boolean
      create_thread: boolean
      delete_thread: boolean
      voice_channel: string
      temp_voicechannel: string
      color: string
      response: string
      temp_role: string
      allowed_roles: string
      banned_roles: string
      opt_out: string
      mentions: string
      image: string
      thumbnail: string
      use_nicknames: string
    }
    classes: [
      {
        name: string
        limit: string
        emoteId: string
        type: string
        specs: [
          {
            name: string
            emoteId: string
            roleName: string
            roleEmoteId: string
          },
        ]
      },
    ]
    roles: [
      {
        name: string
        limit: string
        emoteId: string
      },
    ]
    signUps: [
      {
        name: string
        id: string
        userId: string
        className: string
        classEmoteId: string
        specName: string
        specEmoteId: string
        roleName: string
        roleEmoteId: string
        status: string
        entryTime: number
        position: number
      },
    ]
    lastUpdated: number
    softresId: string
    color: string
  }
}
