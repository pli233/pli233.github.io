export default function Footer() {
    const currentYear = new Date().getFullYear();
    const firstPublishedYear = 2022;

    return (
        <footer className="border-t border-scandi-border bg-scandi-bg/80 pb-28 backdrop-blur-sm sm:pb-32">
            <div className="mx-auto max-w-[1280px] px-6 py-5 sm:px-12 lg:px-20">
                <div className="flex items-center justify-center text-center text-[11px] text-scandi-text-secondary">
                    <span>&copy; {firstPublishedYear}&ndash;{currentYear} Peiyuan Li. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
