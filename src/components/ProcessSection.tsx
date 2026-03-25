import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Solicitas información", desc: "Completa el formulario o escríbenos por WhatsApp." },
  { num: "02", title: "Recibes asesoría", desc: "Nuestro equipo analiza tus necesidades operativas." },
  { num: "03", title: "Te enviamos cotización", desc: "Propuesta personalizada sin compromiso." },
  { num: "04", title: "Entrega rápida", desc: "Equipo listo en tu ubicación en el menor tiempo." },
];

const ProcessSection = () => (
  <section className="py-20 md:py-28 gradient-hero">
    <div className="container">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold tracking-widest uppercase text-primary-foreground/60 mb-2">Proceso de trabajo</p>
        <h2 className="text-3xl md:text-4xl text-primary-foreground">
          Así de fácil es trabajar con DSANT
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="text-center"
          >
            <div className="text-5xl font-extrabold text-primary-foreground/15 mb-3 font-display">{s.num}</div>
            <h3 className="text-lg font-bold text-primary-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
