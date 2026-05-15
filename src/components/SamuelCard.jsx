import { motion } from "framer-motion";

export default function SamuelCard() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      viewport={{ once: true }}
      className="relative mt-20 flex justify-center px-6"
    >
      {/* GLOW */}
      <div className="absolute w-[350px] h-[350px] bg-red-500/20 blur-3xl rounded-full" />

      {/* CARD */}
      <motion.div
        whileHover={{
          rotateY: 6,
          rotateX: 4,
        }}
        transition={{
          type: "spring",
          stiffness: 120,
        }}
        className="relative z-10 bg-white/10 border border-white/10 backdrop-blur-xl rounded-[40px] overflow-hidden max-w-[420px] shadow-2xl"
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* IMAGEN */}
        <div className="relative overflow-hidden">
          <img
            src="/images/samuel/samuel-driver.png"
            alt="Samuelito"
            className="w-full h-[500px] object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

          {/* BADGE */}
          <div className="absolute top-5 right-5 bg-red-500 text-white px-4 py-2 rounded-full font-bold shadow-xl">
            ⚡ Rookie Racer
          </div>
        </div>

        {/* INFO */}
        <div className="p-8 text-center">
          <h2 className="text-4xl font-black">
            Samuelito
          </h2>

          <p className="mt-4 text-zinc-300 text-lg">
            El pequeño campeón está listo para
            celebrar su primer añito en la pista.
          </p>

          {/* DETALLES */}
          <div className="mt-8 grid gap-4">
            <div className="bg-black/30 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                📍 Lugar
              </p>

              <p className="font-bold text-lg">
                Cll 2c #25-98
              </p>
            </div>

            <div className="bg-black/30 rounded-2xl p-4">
              <p className="text-zinc-400 text-sm">
                🕑 Hora
              </p>

              <p className="font-bold text-lg">
                2:00 PM
              </p>
            </div>
          </div>

          {/* BOTÓN */}
          <a
            href="https://wa.me/573123835052?text=Hola%20confirmo%20mi%20asistencia%20a%20la%20fiesta%20de%20Ian%20Samuel"
            target="_blank"
            className="mt-8 inline-block bg-red-500 hover:bg-red-600 transition px-8 py-4 rounded-full font-bold shadow-xl"
          >
            Confirmar asistencia 🚗
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}