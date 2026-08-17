import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";

export function TwoColumnSection({
  eyebrow,
  heading,
  paragraphs,
  reverse = false,
  children,
  className,
}: {
  eyebrow?: string;
  heading?: string;
  paragraphs?: string[];
  reverse?: boolean;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Container className={cn("grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:items-center", className)}>
      <div className={cn(reverse && "lg:order-2")}>
        {(eyebrow || heading) && <SectionHeading eyebrow={eyebrow} heading={heading ?? ""} />}
        {paragraphs?.map((p, i) => (
          <p key={i} className="mt-4 leading-relaxed text-slate">
            {p}
          </p>
        ))}
      </div>
      <div className={cn(reverse && "lg:order-1")}>{children}</div>
    </Container>
  );
}
