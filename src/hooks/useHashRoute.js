import { useEffect, useState } from "react";

function readRoute() {
  const hash = window.location.hash || "#/";
  const [, page, id] = hash.split("/");

  return {
    page: page || "products",
    productId: id ? Number(id) : null,
  };
}

export function useHashRoute() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(readRoute());

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return route;
}
