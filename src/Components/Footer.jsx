import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral text-neutral-content mt-10">
      <div className="footer p-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <span className="text-xl font-bold flex items-center gap-2">💠 TileGallery</span>
          <p className="text-sm mt-2 opacity-70">Bringing beauty and quality to every corner with our premium tile collection.</p>
        </div>

        <div>
          <span className="footer-title">Quick Links</span>
          <Link href="/" className="link link-hover">
            Home
          </Link>
          <Link href="/all-tiles" className="link link-hover">
            All Tiles
          </Link>
          <Link href="/my-profile" className="link link-hover">
            My Profile
          </Link>
        </div>

   
        <div>
          <span className="footer-title">Customer Service</span>
          <a className="link link-hover">Contact Us</a>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Return Policy</a>
          <a className="link link-hover">FAQ</a>
        </div>
      </div>

      <div className="border-t border-neutral-700 text-center py-4 text-sm opacity-60">© 2026 TileGallery. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
