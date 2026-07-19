export default function Footer() {
    const currentYear = new Date().getFullYear();
    const firstPublishedYear = 2022;

    return (
        <footer className="border-t border-scandi-border bg-scandi-bg/80 pb-32 backdrop-blur-sm sm:pb-36">
            <div className="mx-auto max-w-[1280px] px-6 py-8 sm:px-12 lg:px-20">
                <div className="flex items-center justify-center text-xs text-scandi-text-secondary sm:justify-start">
                    <span>&copy; {firstPublishedYear}&ndash;{currentYear} Peiyuan Li. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}
