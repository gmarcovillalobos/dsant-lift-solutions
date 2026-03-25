import { motion } from "framer-motion";
import { Clock, Users, ShieldCheck, Headphones, Award, Building2 } from "lucide-react";

const reasons = [
  { icon: Clock, title: "Atención rápida", desc: "Respuesta en menos de 24 horas. Tu operación no puede esperar." },
  { icon: Users, title: "Soluciones personalizadas", desc: "Analizamos tu operación para ofrecerte el equipo y servicio ideal." },
  { icon: ShieldCheck, title: "Equipos confiables", desc: "Montacargas revisados, certificados y listos para operar." },
  { icon: Headphones, title: "Soporte técnico", desc: "Equipo de técnicos especializados disponibles para tu empresa." },
  { icon: Award, title: "Experiencia comprobada", desc: "Años de experiencia atendiendo industrias, almacenes y logística." },
  { icon: Building2, title: "Enfoque empresarial", desc: "Servicio diseñado para las necesidades reales de tu empresa." },
];

const WhyUsSection = () => (
  <section id="nosotros" className="py-20 md:py-28 bg-background">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">¿Por qué elegirnos?</p>
        <h2 className="text-3xl md:text-4xl text-foreground">
          Tu operación merece un <span className="text-primary">socio confiable</span>
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="flex gap-4"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <r.icon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-foreground mb-1">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
