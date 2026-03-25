import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const serviceOptions = [
  "Renta de montacargas",
  "Compra de montacargas",
  "Servicio técnico",
  "Refacciones",
  "Otro",
];

const ContactSection = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({ title: "¡Solicitud enviada!", description: "Nos pondremos en contacto contigo pronto." });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contacto" className="py-20 md:py-28 bg-secondary/50">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold tracking-widest uppercase text-accent mb-2">Contacto</p>
          <h2 className="text-3xl md:text-4xl text-foreground mb-4">
            Solicita tu <span className="text-primary">cotización inmediata</span>
          </h2>
          <p className="text-muted-foreground">Completa el formulario y recibe respuesta en menos de 24 horas.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-card rounded-lg border border-border p-8 shadow-industrial space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Nombre *</label>
              <Input required placeholder="Tu nombre completo" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
              <Input placeholder="Nombre de tu empresa" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono *</label>
            <Input required type="tel" placeholder="(55) 1234-5678" />
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Servicio que necesitas *</label>
            <select
              required
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <option value="">Selecciona un servicio</option>
              {serviceOptions.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
            <Textarea placeholder="Cuéntanos más sobre lo que necesitas..." rows={4} />
          </div>
          <Button type="submit" size="lg" className="w-full gradient-cta text-primary-foreground border-0 hover:opacity-90 transition-opacity" disabled={loading}>
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Enviando..." : "Solicitar cotización inmediata"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
