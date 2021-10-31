import Link from "next/link";
import { motion } from "framer-motion";
import { variants, items } from "../util/variants";

export default function () {
  return (
    <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={variants}
    >
      <div className="container max-w-sm mx-auto">
        <motion.h1 variants={items}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit?
        </motion.h1>
        <motion.div variants={items}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
          accusamus velit nisi debitis numquam distinctio excepturi quos maiores
          quisquam modi minus consequuntur unde dolore aut, dolorum, eos quod,
          sunt fugiat?
        </motion.div>
        <motion.div variants={items} className="p-8 my-8 bg-gray-100">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia ut
          nam deleniti sapiente est corporis consequuntur cupiditate,
          repellendus quia eveniet sint porro iste pariatur molestiae dicta
          esse, quo cum saepe.
        </motion.div>
        <motion.div variants={items}>
          <Link className="" href="/">
            <a>Voltar</a>
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
