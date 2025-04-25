import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex h-20 items-center justify-center bg-[#0a891e] text-white">
      <div className="flex items-center gap-4">
        <Link href="https://www.facebook.com/feukadiwa/">Facebook</Link>
        <Link href="https://twitter.com">Twitter</Link>
        <Link href="https://Instagram.com">Instagram</Link>
      </div>
    </div>
  );
};

export default Footer;
