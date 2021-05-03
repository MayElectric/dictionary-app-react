import Dictionary from "./Dictionary";

import "@popperjs/core/dist/esm/popper";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

function App() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-5">Img</div>
        <div className="col-md-7">
          <Dictionary />
        </div>
      </div>
    </div>
  );
}

export default App;