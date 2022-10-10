import { Route } from "react-router-dom";

export const mapRoute = (asd) => {
    return (
      <>
        {asd.map(({ path, element, id, abc }, i) => {
          if (abc) {
            return (
              <>
                <Route key={id} path={path} element={element} />;{mapRoute(abc)}
              </>
            );
          } else {
            return <Route key={id} path={path} element={element} />;
          }
        })}
      </>
    );
  };