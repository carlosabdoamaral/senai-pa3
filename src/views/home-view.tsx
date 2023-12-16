import { CustomNavbar } from "../components/navbar";
import "./home-view.scss";

export function HomeView() {
  return (
    <div className="wrapper home-view-wrapper">
      <CustomNavbar />

      <div className="home-view-content">
        <div className="large-title">
          <h1>
            MyClub<span>.</span>
          </h1>
          <small>
            Faça parte de algo especial - MyClub é mais que uma carteira
            digital; é o lugar onde os fãs se encontram, se conectam e são
            recompensados por sua dedicação inabalável
          </small>
        </div>
      </div>
    </div>
  );
}
