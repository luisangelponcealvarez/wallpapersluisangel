import { MapCard } from "./Components/MapCard";
import "./Style/wallpapers.css";
import "./Style/Button.css";
import { ListWallpapers } from "./Data/ListWallpapers";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <section id="wallpapers">
        <div className="container-wallpapers">
          <h1>Wallpapers</h1>

          <a
            href="https://github.com/luisangelponcealvarez/Wallpapers/tree/main/Wallpapers"
            target="_blank"
          >
            <button>
              <i className="fa-brands fa-github GitHub" />
              Repo
            </button>
          </a>
        </div>

        {ListWallpapers.map((wallpaper, index) => (
          <MapCard wallpaper={wallpaper} key={index} />
        ))}
      </section>
      <Footer />
    </>
  );
}

export default App;
