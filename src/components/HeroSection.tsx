import { motion } from "framer-motion";
import { MessageCircle, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-forklift.jpg";

const HeroSection = () => (
  <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Almacén industrial con montacargas" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 gradient-hero opacity-85" />
    </div>

    <div className="container relative z-10 py-32 md:py-40">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Renta y venta de montacargas con disponibilidad inmediata
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl">
          Soluciones confiables para logística, almacenes e industria. Equipos listos, servicio técnico especializado y atención personalizada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="gradient-cta text-primary-foreground border-0 text-base px-8 py-6 shadow-lg hover:opacity-90 transition-opacity" asChild>
            <a href="#contacto">
              <FileText className="w-5 h-5 mr-2" />
              Solicitar cotización
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground bg-primary-foreground/10 hover:bg-primary-foreground/20 text-base px-8 py-6" asChild>
            <a href="https://wa.me/+5213332558797" target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactar por WhatsApp
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
