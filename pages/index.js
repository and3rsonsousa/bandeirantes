import Link from "next/link";
import { motion } from "framer-motion";
import { container, fadeInUp, fadeInDown } from "../util/variants";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const { ref, inView } = useInView({
    threshold: 0.4,
  });
  const { ref2, inView2 } = useInView({
    threshold: 0,
  });

  return (
    <motion.div
      id="app"
      initial="initial"
      animate="enter"
      exit="exit"
      variants={container}
    >
      <motion.div variants={fadeInDown} className=" bg-brand-3">
        <div className="container flex items-center justify-between h-16 mx-auto text-brand-1">
          <div className="logo">LOGO</div>
          <div className="space-x-1 menu">
            {[
              { name: "Quem Somos", url: "/quem-somos" },
              { name: "Loteamentos", url: "/loteametos" },
              { name: "Fale com um Consultor", url: "/fale-com-um-consultor" },
              { name: "Contatos", url: "/contatos" },
            ].map((link) => (
              <Link href={link.url} key={link.url}>
                <a className="px-4 py-3 text-xs font-medium tracking-wider uppercase transition rounded-lg hover:bg-brand-2 hover:text-brand-3">
                  {link.name}
                </a>
              </Link>
            ))}

            <Link href="/boletos">
              <a className="px-4 py-3 font-medium text-white transition rounded-lg bg-brand-5 hover:bg-brand-6">
                Boletos
              </a>
            </Link>
          </div>
          <div className="social">
            {[
              {
                name: "",
                url: "/",
              },
            ].map((social) => (
              <Link key={social.url} href={social.url}>
                <a>{social.name}</a>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="container relative mx-auto banner"
        variants={fadeInUp}
      >
        <div>
          <img src="https://dummyimage.com/1400x700.png" alt="" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center over">
          <div className="text-center drop-shadow-2xl">
            <h1 className="text-4xl font-bold text-white">
              Lorem ipsum dolor sit amet.
            </h1>
            <div className="mt-8">
              <button className="button">CTA asdf a</button>
              <div className="mt-4 text-xs tracking-wider font-white">
                <Link href="/">
                  <a>Mais opções</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={ref2}
        className="container grid grid-cols-6 mx-auto mt-16 space-x-16"
        animate={inView2 ? "enter" : "initial"}
        variants={fadeInUp}
      >
        <div className="col-span-2 col-start-2 div">
          <img src="https://dummyimage.com/800x500.gif" alt="" />
        </div>
        <div className="col-span-2 ">
          <div>
            <h3 className="mb-4 text-2xl font-medium">
              Lorem ipsum dolor sit.
            </h3>
          </div>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            vitae sed exercitationem, quo a voluptatibus!
          </div>
          <div className="mt-4">
            <Link href="/">
              <a className="button button-small button-outline">Saiba mais</a>
            </Link>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="container grid mx-auto mt-16 sm:grid-cols-2 lg:grid-cols-4"
        ref={ref}
        initial="initial"
        animate={inView ? "enter" : "initial"}
        variants={container}
      >
        <motion.div variants={fadeInUp}>
          <img src="https://dummyimage.com/400x400.png" alt="" />
          <h3>
            Lorem.
            <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. At!
            </div>
          </h3>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img src="https://dummyimage.com/400x400.png" alt="" />
          <h3>
            Mollitia?
            <div>
              Voluptatem officia laboriosam nihil minima quas, necessitatibus
              vero nemo?
            </div>
          </h3>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img src="https://dummyimage.com/400x400.png" alt="" />
          <h3>
            Non?
            <div>
              Tempore sit quasi consectetur quae, quod praesentium earum dolor.
            </div>
          </h3>
        </motion.div>
        <motion.div variants={fadeInUp}>
          <img src="https://dummyimage.com/400x400.png" alt="" />
          <h3>
            Eveniet.
            <div>
              Sed quo praesentium beatae et aspernatur corporis, earum velit!
            </div>
          </h3>
        </motion.div>
      </motion.div>

      <div className="container grid mx-auto lg:grid-cols-3">
        <div>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            pariatur minima atque dolor earum nemo.
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/700x400.png" alt="" />
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
        <div>
          <div>
            <img src="https://dummyimage.com/700x400.png" alt="" />
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
          <div>
            <img src="https://dummyimage.com/700x400.png" alt="" />
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <h2>Lorem ipsum dolor sit amet.</h2>
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>

      <footer>
        <div className="container mx-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta
          delectus saepe et ut at libero consectetur, totam incidunt debitis.
          Fugiat nobis dolore, deleniti excepturi dolorem nisi maxime iure
          tempore a!
        </div>
      </footer>
    </motion.div>
  );
}
