import { ExploreTopBooks } from "./components/ExploreTopBooks";
import { Heros } from "./components/Heros";
import { LibraryServices } from "./components/LibraryServices";
import { Carousel } from "./components/carousel";

export const HomePage =() =>{

    return (
    <>
    <ExploreTopBooks/>
      <Carousel/>
      <Heros/>
      <LibraryServices/>
    </>
    );
}