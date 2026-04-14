import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/dsant-logo.png";

const Footer = () => (
  <footer className="bg-navy py-12">
    <div className="container">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <img src={logo} alt="DSANT Montacargas" className="h-10 mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Renta, venta y servicio de montacargas industriales en México. Soluciones confiables para tu operación logística.
          </p>
        </div>
        <div>
          <h4 className="text-primary-foreground font-bold mb-4">Servicios</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Renta de montacargas</li>
            <li>Venta de montacargas</li>
            <li>Servicio técnico</li>
            <li>Refacciones</li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary-foreground font-bold mb-4">Contacto</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> (521) 33 3148 1362</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> contacto@dsant.mx</li>
            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" /> México</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} DSANT Montacargas. Nordik PRO Todos los derechos reservados.
      </div>
    </div>
  </footer>
);

export default Footer;
