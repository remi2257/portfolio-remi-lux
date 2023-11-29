import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="mt-8 border-t sm:mt-12">
      <div className="container flex flex-col items-center justify-center gap-y-2 py-4 sm:flex-row sm:justify-between">
        <h2 className="text-center font-bold">Developped by Rémi Lux</h2>
        <SocialIcons />
      </div>
    </footer>
  );
}
