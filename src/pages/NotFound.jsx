import { Link } from "react-router-dom";
import { Container } from "../components/Container";
import { Button } from "../components/Button";

export default function NotFound() {
  return (
    <section className="py-20">
      <Container className="text-center">
        <div className="text-5xl font-black tracking-tight">404</div>
        <p className="mt-3 text-sm text-slate-600">That page doesn’t exist. Let’s get you back on track.</p>
        <div className="mt-8 flex justify-center gap-3">
          <Link to="/"><Button>Go Home</Button></Link>
          <Link to="/contact"><Button variant="outline">Bookings</Button></Link>
        </div>
      </Container>
    </section>
  );
}
