import React from "react";
import code from "../../public/code.jpg";
import avatar from "../../public/avatar-img.jpg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faShare, faComment } from "@fortawesome/free-solid-svg-icons";

const BlogPost = () => {
  return (
    <article className=" mt-24 text-gray-200 md:mx-40 md:mt-12">
      <div className="blog-title-heading flex flex-col gap-y-2 ">
        <h3 className="text-base text-orange-400 md:text-lg">#React</h3>
        <h1 className=" text-4xl font-bold md:text-5xl">A Post About React</h1>
        <p className=" text-base italic md:text-lg">
          React is one of the best frameworks to use
        </p>
      </div>
      <div className="my-12 flex flex-col items-center gap-y-4 md:flex-row md:items-center md:justify-between">
        <div className=" flex flex-row items-center gap-x-2">
          <img
            id="avatar"
            src={avatar.src}
            alt="Avatar"
            className="h-12 w-12 rounded-full"
          />
          <div id="author-date">
            <h3>Rodderick Garland</h3>
            <p className="">Jan, 1 2023</p>
          </div>
        </div>
        <div id="social-interaction" className="flex flex-row gap-x-4">
          <button className="flex flex-row items-center gap-x-2 rounded-full border border-gray-400 px-4 py-2">
            <FontAwesomeIcon icon={faHeart} />
            <span>10</span>
          </button>
          <button className="flex flex-row items-center gap-x-2 rounded-full border border-gray-400 px-4 py-2">
            <FontAwesomeIcon icon={faComment} />
            <span>15</span>
          </button>
          <button className="">
            <FontAwesomeIcon icon={faShare} className="text-lg" />
          </button>
        </div>
      </div>
      <div className="relative h-72 w-full md:h-96">
        <Image
          src={code.src}
          alt="Code on Screen"
          fill
          className="w-full !object-cover"
        />
      </div>
      {/* Blog Body */}
      <div className="prose my-16 text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis sunt
        obcaecati reiciendis assumenda commodi! Nihil, nam in? Aliquid
        consectetur repellat aspernatur nobis ea alias eligendi tempore
        excepturi eveniet, assumenda accusamus. Libero itaque ipsam officiis,
        sed veritatis sunt id provident iure tempora at minima in, recusandae
        doloremque tenetur quo voluptas illo distinctio harum quisquam
        temporibus optio. Accusantium quidem minima ut nemo? Consequuntur,
        voluptatibus deleniti. Animi labore saepe quo necessitatibus dolor
        facilis optio est, rem libero aliquid voluptate quaerat placeat officiis
        laborum blanditiis, natus iusto perspiciatis dolorem repellat. Odio
        voluptates fugit numquam. Saepe deserunt excepturi tenetur aut animi
        enim corrupti ducimus necessitatibus ipsum? Quam, doloremque minima
        delectus aliquam debitis ducimus ullam. Deserunt sapiente rem harum
        eligendi accusantium perspiciatis, nemo commodi eveniet quos. Cum,
        molestias esse. Quasi ipsam totam necessitatibus molestiae iure nesciunt
        veritatis aspernatur at id odio repellendus doloremque saepe enim soluta
        amet aliquid nihil vitae, animi corrupti accusantium ad dignissimos!
        Dolore. Explicabo animi fuga officia soluta, laborum, dolore sed error
        numquam obcaecati cum sequi sint aspernatur vitae facere mollitia dolor.
        Recusandae omnis tenetur magnam. Quo facere obcaecati ea, rerum impedit
        magnam? Soluta fugit cumque dicta tempore eius vel esse vitae, rem
        perspiciatis necessitatibus, quis consequatur laboriosam repellat
        molestiae reiciendis totam atque? Maxime quibusdam ipsam sint rerum
        nostrum, reprehenderit perspiciatis sunt dicta. Obcaecati magni
        asperiores placeat adipisci ipsam, atque velit libero accusantium!
        Commodi asperiores quasi quod reiciendis velit, perferendis eos nemo
        libero numquam blanditiis cum maxime ab necessitatibus, non nulla,
        excepturi fugit. Maiores hic repellendus, vitae ipsa eos et, iusto
        ratione consequuntur numquam aperiam quod pariatur asperiores,
        consequatur debitis est expedita. Veritatis provident expedita aliquam a
        est temporibus repudiandae, incidunt alias saepe? Corrupti, assumenda
        corporis pariatur enim dolorum distinctio. Expedita repellat voluptates
        magnam, vero optio mollitia ipsam nam sint. Molestias quidem, cumque
        consectetur ea deleniti asperiores eius minima voluptate ex doloremque
        nihil!
      </div>
    </article>
  );
};

export default BlogPost;
