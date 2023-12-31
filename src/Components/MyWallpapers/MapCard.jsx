import "../../Style/main.css";

export function MapCard({ wallpaper }) {
  return (
    <div className="card-wallpaper">
      <div className="face front">
        <img
          className="card-img-top card-image wallpaper"
          src={
            "https://github.com/luisangelponcealvarez/SiteWallpapers/blob/main/Wallpapers/" +
            wallpaper.nameWithoutExtension +
            ".jpg?raw=true"
          }
          alt={wallpaper.nameWithoutExtension}
        />
        <div className="user">
          <h5>{wallpaper.nameWithoutExtension}</h5>
        </div>
      </div>

      <div className="face back">
        <h4>{wallpaper.nameWithoutExtension}</h4>
        <div className="link">
          <a
            href={
              "https://github.com/luisangelponcealvarez/Wallpapers/tree/main/Wallpapers/" +
              wallpaper.nameWithoutExtension +
              ".jpg"
            }
            target="_blank"
            className="btn btn-outline-secondary"
          >
            <i className="fa-brands fa-github icon" />
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
