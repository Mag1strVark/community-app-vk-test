import { createContext, FC, useContext, ReactNode } from 'react'

type EventHandler = (...args: any[]) => void

class EventBus {
  private events: Record<string, EventHandler[]> = {}

  on(event: string, handler: EventHandler) {
    if (!this.events[event]) {
      this.events[event] = []
    }
    this.events[event].push(handler)
  }

  off(event: string, handler: EventHandler) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((h) => h !== handler)
    }
  }

  emit(event: string, ...args: any[]) {
    if (this.events[event]) {
      this.events[event].forEach((handler) => handler(...args))
    }
  }
}

const eventBus = new EventBus()

const EventBusContext = createContext<EventBus>(eventBus)

export const useEventBus = () => useContext(EventBusContext)

interface EventBusProviderProps {
  children: ReactNode
}

export const EventBusProvider: FC<EventBusProviderProps> = ({ children }) => {
  return <EventBusContext.Provider value={eventBus}>{children}</EventBusContext.Provider>
}

export default eventBus
