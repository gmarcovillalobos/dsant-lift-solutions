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

    const formData = new FormData(e.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const company = String(formData.get("company") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const message = String(formData.get("message") || "").trim();

    const whatsappMessage = [
      "Hola, quiero solicitar una cotización en DSANT.",
      `Nombre: ${name}`,
      company ? `Empresa: ${company}` : "",
      `Teléfono: ${phone}`,
      `Servicio: ${service}`,
      message ? `Mensaje: ${message}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    window.open(`https://wa.me/5213331481362?text=${encodeURIComponent(whatsappMessage)}`, "_blank", "noopener,noreferrer");
    toast({ title: "Solicitud lista", description: "Se abrió WhatsApp con tu cotización preparada." });
    e.currentTarget.reset();
    setLoading(false);
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
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Nombre *</label>
              <Input id="name" name="name" required placeholder="Tu nombre completo" />
            </div>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Empresa</label>
              <Input id="company" name="company" placeholder="Nombre de tu empresa" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Teléfono *</label>
            <Input id="phone" name="phone" required type="tel" placeholder="(55) 1234-5678" />
          </div>
          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Servicio que necesitas *</label>
            <select
              id="service"
              name="service"
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
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
            <Textarea id="message" name="message" placeholder="Cuéntanos más sobre lo que necesitas..." rows={4} />
          </div>
          <Button type="submit" size="lg" className="w-full gradient-cta text-primary-foreground border-0 hover:opacity-90 transition-opacity" disabled={loading}>
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Preparando..." : "Solicitar cotización inmediata"}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
