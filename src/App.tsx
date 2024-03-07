import './styles/sanitize.scss'
import './styles/variables.scss'
import './styles/text.scss'
import './styles/ui-kit.styles.scss'
import './styles/base.scss'
import { EventBusProvider } from './services/eventBus'

const App = () => {
  return (
    <EventBusProvider>
      <div></div>
    </EventBusProvider>
  )
}

export default App
