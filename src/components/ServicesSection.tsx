import { motion } from "framer-motion";
import { Truck, ShoppingCart, Wrench, Package, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Truck,
    title: "Renta de Montacargas",
    description: "Equipos disponibles por día, semana, mes o proyecto. Montacargas eléctricos, de combustión, apiladores y patines hidráulicos.",
    benefits: ["Disponibilidad inmediata", "Sin inversión inicial", "Mantenimiento incluido", "Equipos certificados"],
    cta: "Cotizar renta",
  },
  {
    icon: ShoppingCart,
    title: "Venta de Montacargas",
    description: "Montacargas nuevos, seminuevos y reacondicionados. Asesoría personalizada para elegir el equipo ideal para tu operación.",
    benefits: ["Equipos nuevos y seminuevos", "Asesoría especializada", "Cotización personalizada", "Opciones de financiamiento"],
    cta: "Cotizar equipo",
  },
  {
    icon: Wrench,
    title: "Servicio Técnico",
    description: "Mantenimiento preventivo y correctivo, reparación, diagnóstico de fallas y servicio en sitio para mantener tu operación activa.",
    benefits: ["Mantenimiento preventivo", "Reparación en sitio", "Diagnóstico especializado", "Tiempos de respuesta rápidos"],
    cta: "Solicitar servicio",
  },
  {
    icon: Package,
    title: "Refacciones",
    description: "Amplio inventario de llantas, baterías, cargadores, horquillas, filtros, sistemas hidráulicos y partes eléctricas.",
    benefits: ["Llantas y baterías", "Horquillas y filtros", "Sistemas hidráulicos", "Partes eléctricas"],
    cta: "Cotizar refacciones",
  },
];

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

const ServicesSection = () => (
  <section id="servicios" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">Nuestros servicios</p>
        <h2 className="text-3xl md:text-4xl text-foreground">
          Soluciones integrales en <span className="text-primary">montacargas industriales</span>
        </h2>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="grid md:grid-cols-2 gap-8"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="bg-card rounded-lg border border-border p-8 hover:shadow-card-hover transition-shadow group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <s.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground mb-5 leading-relaxed">{s.description}</p>
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {s.benefits.map((b) => (
                <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                  <ChevronRight className="w-4 h-4 text-accent flex-shrink-0" />
                  {b}
                </li>
              ))}
            </ul>
            <Button asChild variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <a href="#contacto">{s.cta}</a>
            </Button>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ServicesSection;
