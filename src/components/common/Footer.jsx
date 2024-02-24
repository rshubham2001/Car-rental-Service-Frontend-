import { FaFacebookF, FaTwitter, FaGoogle, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="text-center text-white" style={{ backgroundColor: '#0b0633' }}>
            <div className="container pt-4">
                <section className="mb-4">
                    <Link
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FaFacebookF />
                    </Link >

                    <Link
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FaTwitter />
                    </Link >

                    <Link
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FaGoogle />
                    </Link >
                    <Link
                        className="btn btn-link btn-floating btn-lg text-white m-1"
                        to="#!"
                        role="button"
                        data-mdb-ripple-color="dark"
                    >
                        <FaInstagram />
                    </Link >
                </section>
            </div>

            <div className="text-center text-white p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 - {new Date().getFullYear()} Safar.
            </div>
            {/* Copyright */}
        </footer>
    );
}
