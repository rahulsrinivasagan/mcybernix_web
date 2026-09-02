interface ServiceCardProps {
  id: string;
  num: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function ServiceCard({
  id,
  num,
  title,
  description,
  imageSrc,
  imageAlt,
  href = "#contact",
}: ServiceCardProps) {
  return (
    <article className="svc-card" id={id}>
      <div className="svc-body">
        <div className="num">{num}</div>
        <h3>{title}</h3>
        <p>{description}</p>
        <a aria-label={title} className="circ" href={href}>
          →
        </a>
      </div>
      <div className="svc-art">
        <img
          alt={imageAlt}
          height={768}
          loading="lazy"
          src={imageSrc}
          width={1024}
        />
      </div>
    </article>
  );
}
