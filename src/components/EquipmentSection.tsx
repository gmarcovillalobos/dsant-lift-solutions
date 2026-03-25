import { motion } from "framer-motion";
import { Zap, Flame, ArrowUpFromLine, MoveHorizontal } from "lucide-react";

const equipment = [
  {
    icon: Zap,
    name: "Montacargas Eléctricos",
    desc: "Ideales para interiores, almacenes y centros de distribución. Cero emisiones, bajo nivel de ruido y alta eficiencia energética.",
    ideal: "Almacenes cerrados y centros de distribución",
  },
  {
    icon: Flame,
    name: "Montacargas de Combustión",
    desc: "Máxima potencia para operaciones en exteriores y terrenos irregulares. Gasolina, diésel o gas LP según tu necesidad.",
    ideal: "Exteriores, constructoras y manufactura",
  },
  {
    icon: ArrowUpFromLine,
    name: "Apiladores",
    desc: "Solución compacta para pasillos estrechos y estibado en racks. Alta maniobrabilidad en espacios reducidos.",
    ideal: "Bodegas con pasillos estrechos",
  },
  {
    icon: MoveHorizontal,
    name: "Patines Hidráulicos",
    desc: "Transporte horizontal de pallets de forma rápida y eficiente. Económicos, ligeros y fáciles de operar.",
    ideal: "Carga y descarga, logística ligera",
  },
];

const EquipmentSection = () => (
  <section id="equipos" className="py-20 md:py-28 bg-secondary/50">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">Tipos de equipo</p>
        <h2 className="text-3xl md:text-4xl text-foreground">
          El equipo adecuado para <span className="text-primary">cada operación</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {equipment.map((eq, i) => (
          <motion.div
            key={eq.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="bg-card rounded-lg p-6 border border-border text-center hover:shadow-card-hover transition-shadow"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <eq.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-lg font-bold text-foreground mb-2">{eq.name}</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{eq.desc}</p>
            <span className="inline-block text-xs font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">
              {eq.ideal}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default EquipmentSection;
