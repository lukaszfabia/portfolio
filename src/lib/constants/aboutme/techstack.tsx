import { SiNextdotjs, SiFastapi, SiGo, SiSwift, SiDocker, SiArchlinux, SiMacos, SiRabbitmq, SiPostgresql, SiMongodb, SiTailwindcss } from "@icons-pack/react-simple-icons";

const techList = [
  { icon: SiNextdotjs, name: 'Next.js' },
  { icon: SiFastapi, name: 'FastAPI' },
  { icon: SiGo, name: 'Go' },
  { icon: SiSwift, name: 'Swift' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiArchlinux, name: 'Arch Linux' },
  { icon: SiMacos, name: 'macOS' },
  { icon: SiRabbitmq, name: 'RabbitMQ' },
  { icon: SiPostgresql, name: 'PostgreSQL' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiTailwindcss, name: 'TailwindCSS' },
];

export const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 py-6">
      {techList.map(({ icon: Icon, name }) => (
        <div key={name} className="flex flex-col items-center" title={name}>
          <Icon size={50} />
        </div>
      ))}
    </div>
  );
};
