import App from '../components/App'
import Header from '../components/Header'

export default (props) => (
  <App>
    <Header pathname={props.url.pathname} />
    <article>
      <h1>Hippo is /spaced repetition/</h1>
      <p>Spaced repetition is...</p>
    </article>
  </App>
)
