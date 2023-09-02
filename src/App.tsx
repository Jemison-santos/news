import { Footer } from './components/footer'
import { Menu } from './components/menu'
import { News } from './components/news'

function App() {

  return (
    <>
      <Menu/>

      <div className='container'>

        <News
          imageUrl="./src/components/assets/newspaper.jpg"
          title="Lorem ipsum dolor sit amet"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod justo nec urna vehicula, eu vestibulum sapien mattis."
        />

        <News
          imageUrl="./src/components/assets/newspaper.jpg"
          title="Quisque sit amet purus"
          text="Nunc vel ipsum congue, volutpat erat nec, cursus turpis. Sed dictum aliquet molestie.."
        />

        <News
          imageUrl="./src/components/assets/newspaper.jpg"
          title="Morbi gravida imperdiet libero"
          text="Nulla eros augue, porta at massa tincidunt, fermentum facilisis mi. Sed venenatis dui non."
        />
      </div>

      <Footer/>

    </>
  )
}

export default App
