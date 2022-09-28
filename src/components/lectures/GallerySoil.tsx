import { Component } from "solid-js";
import Masonry from "solid-masonry";
import "../../masonry.css";

const GallerySoil: Component = () => {
    const data = [
        "https://www.jardineriaon.com/wp-content/uploads/2012/05/47.jpeg",
        "https://www.gardeningknowhow.com/wp-content/uploads/2020/11/sandy-soil.jpg",
        "https://bustlingnest.com/wp-content/uploads/build-living-soil.jpg",
        "https://b3n8a3n8.rocketcdn.me/wp-content/uploads/2020/02/perlite-vs-vermiculite-01.jpg",
        "https://2.wlimg.com/product_images/bc-full/2022/7/1319420/coco-peat-1658378078-3511400.jpeg",
        "https://www.ourhouseplants.com/imgs-content/various-house-plant-soils.jpg",
        "https://balconygardenweb-lhnfx0beomqvnhspx.netdna-ssl.com/wp-content/uploads/2020/03/1.-Bark-Potting-Mix-1.jpg",
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
}

export default GallerySoil;