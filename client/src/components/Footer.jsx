
function Footer() {
    return (
      <footer className="bg-gray-200 text-center p-4 absolute bottom-0 w-full">
        <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Music to Ticket. All rights reserved.
        </p>
      </footer>
    );
}
export default Footer;
