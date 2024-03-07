import './styles/sanitize.scss'
import './styles/variables.scss'
import './styles/text.scss'
import './styles/ui-kit.styles.scss'
import './styles/base.scss'
import { EventBusProvider } from './services/eventBus'
import Communities from './screen/Communities/page/Community'

const App = () => {
  return (
    <EventBusProvider>
      <div className="flex-page-center pageContent">
        <Communities />
      </div>
    </EventBusProvider>
  )
}

export default App
