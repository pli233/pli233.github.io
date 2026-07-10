export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-scandi-border bg-scandi-bg/80 backdrop-blur-sm">
            <div className="max-w-[1280px] mx-auto px-6 sm:px-12 lg:px-20 py-8">
                <div className="flex items-center justify-center text-xs text-scandi-text-secondary sm:justify-start">
                    <span>&copy; {year} Peiyuan Li. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
