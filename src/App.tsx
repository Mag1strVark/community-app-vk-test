import { EventBusProvider } from './services/eventBus'

const App = () => {
  return (
    <EventBusProvider>
      <div></div>
    </EventBusProvider>
  )
}

export default App
