import './app.css'
import App from './App.svelte'
// import App from 'components/Uploader.svelte'

const app = new App({
  //@ts-ignore
  target: document.getElementById('app'),
})



export default app
