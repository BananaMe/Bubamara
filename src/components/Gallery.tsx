import { Component } from "solid-js";
import Masonry from "solid-masonry";
import "../masonry.css";

const Gallery: Component = () => {
  const data = [
    "https://cdn.britannica.com/50/5650-050-77351097/Epiphytes-orchids-roots-air-moisture-plants-hosts.jpg",
    // "https://images.pexels.com/photos/1542937/pexels-photo-1542937.jpeg",
    // "https://images.pexels.com/photos/66181/pexels-photo-66181.jpeg",
    "https://images.pexels.com/photos/918962/pexels-photo-918962.jpeg",
    "https://www.chicagobotanic.org/sites/default/files/images/blog/orchid_roots.jpg",
    "https://i.etsystatic.com/5565666/r/il/ddf4ea/3062257428/il_fullxfull.3062257428_sc6w.jpg",
    "https://images.pexels.com/photos/2820119/pexels-photo-2820119.jpeg",
    "https://orchidfriends.com/wp-content/uploads/2018/11/why-orchid-flowers-fall-spike.jpg",
    // "https://images.squarespace-cdn.com/content/v1/57f3f3aa9f745678e929032f/1511990967538-HWSA79YYGRXP1TT8RWFI/_MG_8700_chelsaeanne.jpg",
    // "https://images.unsplash.com/photo-1576014131341-fe1486fb2475"
  ];
  const heightList = [150, 200, 250, 300];
  const randomHeight = () => {
    return heightList[Math.floor(Math.random() * heightList.length)];
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
      each={data}
    >
      {(item) => <img src={item}></img>}
    </Masonry>
  );
};
export default Gallery;
